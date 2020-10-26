import React from 'react'
import { Card } from 'semantic-ui-react'

const UserFavorites = ({ _id, favorite_routes: { route } }) => {
  
  return (
    <>
    <Card>
      <Card.Content>
        <Card.Header>{route}</Card.Header>
        <Card.Description>
        </Card.Description>
        <Card.Description>

        </Card.Description>
        <Card.Description>
        </Card.Description>
      </Card.Content>
    </Card>
  </>
  )
}

export default UserFavorites