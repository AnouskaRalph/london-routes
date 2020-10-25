import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const UserCreatedRoutes = ({ _id, created_routes: { borough, difficulty, miles, stops } }) => {

  return (
    <Card>
      {/* <Image src={image} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{borough}</Card.Header>
        <Card.Meta>
          <span className='date'>{stops}</span>
          </Card.Meta>
          <Card.Description>
            {miles}
            {difficulty}
          </Card.Description>
      </Card.Content>
      </Card>
  )
}


export default UserCreatedRoutes