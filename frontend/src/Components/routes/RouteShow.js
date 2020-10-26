import React, { Component } from 'react'
import { Card, Button, Popup } from 'semantic-ui-react'
import {  getSingleRoute } from '../../lib/api'

class RouteShow extends Component {
  state = {
    route: null
  }

async componentDidMount() {
  const route_id = this.props.match.params.id
  const response = await getSingleRoute(route_id)
  
  this.setState({
    route: response.data
  })
}

render() {
  const { stops, miles, borough, difficulty } = this.props
  console.log(this.props)
  return (
    <Card>
    <div id='parks-card-img' className='home-card-imgs'></div>
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
        onClick={this.handleClick} />}
        content='Save route'
        inverted
      />
    </Card.Content>
  </Card>
  ) 
}


}

export default RouteShow