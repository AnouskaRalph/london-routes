import React, { Component } from 'react'
import { Card, Button, Popup } from 'semantic-ui-react'
import {  getSingleRoute } from '../../lib/api'

class RouteShow extends Component {

  constructor() {
    super()

    this.state = {}
  }

async componentDidMount() {
  const routeid = this.props.match.params.id
  const response = await getSingleRoute(routeid)
  this.setState({
    route: response.data
  })
}

render() {
  if (!this.state.route) return null
  const { stops, miles, borough, difficulty } = this.state.route
  console.log('10 PROPS>>>', this.props)
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