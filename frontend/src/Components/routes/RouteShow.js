import React, { Component } from 'react'
import { Card, Button, Popup, Image, Segment, Grid, Header, Comment, Form } from 'semantic-ui-react'
import { getSingleRoute, addFavorites, addComment } from '../../lib/api'
// import { isAuthenticated } from '../../lib/auth'
import { Redirect } from 'react-router-dom'
// import SingleComment from './SingleComment'
import { Link } from 'react-router-dom'

class RouteShow extends Component {

  state = {
    id: '',
    route: '',
    currentUserProfile: {},
    profileData: null,
    formData: {
      text: ''
    },
    comments: []
  }

  async componentDidMount() {
    const route_id = this.props.match.params.id
    // console.log('ROUTE ID HELLO >>>>>', route_id)
    const response = await getSingleRoute(route_id)
    // const { comments } = this.state.data
    console.log('COMMENTs HERE>>')
    this.setState({
      route: response.data,
      id: response.data.id
      // comments: comments
    })
  }

  handleClick = async (e) => {
    e.preventDefault()
    const routeId = this.props.match.params.id
    try {
      const response = await addFavorites({ route: routeId })
      if (response.status === 201) {
        this.setState({
          redirect: '/userprofile'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      text: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async (e, formData) => {
    const routeId = this.props.match.params.id
    try {
      const formData = { route: routeId, ...this.state.formData }
      // console.log('FORMDATA NEW>>>', formData)
      const response = await addComment(formData)
      const returnedComments = response.data.text
      // console.log('RETURNED COMMENTS>', returnedComments)
      // const newComment = [...returnedComments]
      // console.log('NEW COMMENT', newComment)
      // if (isAuthenticated()) {
      //   const resGetUser = await getUserProfile()
      //   if (typeof (returnedComments[returnedComments.length - 1].user) === 'string') {
      //     newComment[newComment.length - 1].user = {
      //       username: resGetUser.data.username,
      //       profile_image: resGetUser.data.userimage
      //     }
      //   }
      // } 
      this.setState({
        comments: returnedComments,
        formData: ''
      })
    } catch (err) {
      console.log('ERRRRR>>>', err.response)
    }
  }


  render() {
    if (!this.state.route) return null
    const { id, image, stops, miles, borough, difficulty } = this.state.route
    const { text, returnedComments } = this.state

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <>
        <Segment style={{ padding: '8em 10em' }} vertical id='features'>
          <Grid>
            <Grid.Column
              className='home-column-box'
              floated='left'
              width={7}
            >
              <Card>
                <Image src={image} style={{ marginTop: '0em' }} />
                <Card.Content>
                  <Card.Header>{borough}</Card.Header>
                  <Card.Description>
                    Miles: {miles}
                  </Card.Description>
                  <Card.Description>
                    Stops: {stops}
                  </Card.Description>
                  <Card.Description>
                    Difficulty: {difficulty}
                  </Card.Description>
                  <Popup
                    trigger={<Button icon='add'
                      onClick={this.handleClick}
                      id={id}
                    />}
                    content='Save route'
                    inverted
                  />
                </Card.Content>
              </Card>
              <Button
                style={{ marginTop: '20px' }}
                size='large'
                icon='arrow alternate circle left'
                as={Link}
                to='/routeindex'
              ></Button>
              <div id='street-img' className='home-images'></div>
            </Grid.Column>
            <Grid.Column
              className='home-column-box'
              floated='right'
              width={7}
            >
              <Comment.Group style={{ margin: '40px' }}>
                <Header style={{ color: 'white' }} as='h3' dividing>
                  Comments
                </Header>
                <Form onSubmit={this.handleSubmit}
                  reply>
                  <Form.TextArea
                    onChange={this.handleChange}
                    value={text}
                  />
                  <Button
                    content='Leave a note'
                    labelPosition='left'
                    icon='edit'
                    primary />
                  <p>{returnedComments}</p>
                </Form>
              </Comment.Group>
            </Grid.Column>
          </Grid>
        </Segment>

        {/* {comments.map((comment, index) => {
          return <SingleComment
            key={index}
            {...comment}
            routeId={this.props.routeId}
            currentUserProfile={currentUserProfile}
          />
        })
    } */}



      </>
    )
  }
}

export default RouteShow