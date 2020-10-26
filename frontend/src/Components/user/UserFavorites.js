import React from 'react'
import { Card } from 'semantic-ui-react'

const UserFavorites = ({ route: { image, borough, miles, stops }}) => {

return (
    <>
    <Card>
      <Card.Content>
        <Card.Header>{borough}</Card.Header>
        <Card.Description>{miles}
        </Card.Description>
        <Card.Description>
        {stops}
        </Card.Description>
      </Card.Content>
    </Card>
  </>
)
}
  
  
  


export default UserFavorites