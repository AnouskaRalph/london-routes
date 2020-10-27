import React, { Component } from 'react'
import { Card, Button, Popup, Image, Segment, Grid, Header } from 'semantic-ui-react'
import {  getSingleRoute, addFavorites } from '../../lib/api'
import { Redirect } from 'react-router-dom'

class RouteShow extends Component {

  state = {
    id: '',
    route: ''
  }

async componentDidMount() {
  const route_id = this.props.match.params.id
  // console.log('ROUTE ID HELLO >>>>>', route_id)
  const response = await getSingleRoute(route_id)
  // console.log('RESPONSE HERE>>', response)
  this.setState({
    route: response.data,
    id: response.data.id
  })
  // console.log('DATA ID', response.data.id)
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

  
  



render() {
  if (!this.state.route) return null
  const { id, image, stops, miles, borough, difficulty } = this.state.route
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }
  return (
    <>

    <Segment style={{ padding: '8em 4em' }} vertical id='features'>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
          <Card>
      <Image src={image} style={{ marginTop: '2em' }} />
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
          </Grid.Row>
        </Grid>
      </Segment>
    
  </>
  ) 
}


}

export default RouteShow