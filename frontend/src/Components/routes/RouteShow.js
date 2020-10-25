import React from 'react'
// import { Link } from 'react-router-dom'
import { Card, Image, Button, Popup, Icon } from 'semantic-ui-react'


const RouteShow = (props) => {

  const { image, stops, miles, borough, difficulty } = props

  return (

  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{borough}</Card.Header>
      <Card.Meta>
        <span className='date'>{stops}</span>
        </Card.Meta>
        <Card.Description>
          {miles}
          {difficulty}
        </Card.Description>
        
        <Popup
      trigger={<Button icon='add' />}
      content='To save route please register'
      inverted
    />
      </Card.Content>
    </Card>

  )
}


export default RouteShow