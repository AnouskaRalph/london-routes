import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const UserFavorites = ({ route: { image, borough, miles, stops }}) => {

return (
    <>
    <Card>
    <Image src={image} style={{ marginTop: '2em' }} />
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