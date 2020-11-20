import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical id='home-page'>
      <Button
        style={{ marginTop: '60px', marginLeft: '1100px' }}
        size='large'
        as={Link}
        to='/routeindex'
      >FIND A ROUTE</Button>
    </Segment>
  )
}

export default Home
