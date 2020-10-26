import React, { Component } from 'react'
import { Card, Button, Popup, Image, Segment, Grid, Header } from 'semantic-ui-react'
import {  getSingleRoute, addFavorites } from '../../lib/api'

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

handleClick = async (e) => {
  const routeid = this.props.match.params.id
  await addFavorites(routeid)

}

render() {
  if (!this.state.route) return null

  const { image, stops, miles, borough, difficulty } = this.state.route
  return (
    <>

    <Segment style={{ padding: '8em 0em' }} vertical id='features'>
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
        onClick={this.handleClick} />}
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