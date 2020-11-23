import React, { Component } from 'react'
import { Card, Button, Popup, Image, Segment, Grid, Header, Comment, Form } from 'semantic-ui-react'
import { getSingleRoute, addFavorites, addComment } from '../../lib/api'
import { Redirect, Link } from 'react-router-dom'
import SingleComment from './SingleComment'



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
    const response = await getSingleRoute(route_id)
    this.setState({
      route: response.data,
      id: response.data.id,
      comments: response.data.comments
    })
    console.log('HEREEEEE', response.data.comments)
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
      console.log('FORMDATA NEW>>>', formData)
      const response = await addComment(formData)
      const newComments = response.data.text
      console.log('RETURNED COMMENTS>>>', newComments)
      this.setState({
        comments: newComments,
        formData: ''
      })
    } catch (err) {
      console.log('ERRRRR>>>', err.response)
    }
  }

  render() {
    if (!this.state.route) return null
    const {
      id, image, stops, miles, borough,
      difficulty,
      text, comments } = this.state.route
    const route_id = this.props.match.params.id



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
                </Form>
              </Comment.Group>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          {comments.map((comment, id) => {
            return <SingleComment
              key={id}
              {...comment}
              route_id={this.props.route_id}>
            </SingleComment>
          })
          }
        </Segment>




      </>
    )
  }
}

export default RouteShow