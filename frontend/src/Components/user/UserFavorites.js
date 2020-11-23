import React from 'react'
import {
  Card,
  Image,
  Grid,
  Segment
}
  from 'semantic-ui-react'

const UserFavorites = ({ route: { image, borough, miles, stops } }) => {

  return (
    <>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Card>
                <Image src={image} style={{ marginTop: '0em' }} />
                <Card.Content>
                  <Card.Header>{borough}</Card.Header>
                  <Card.Description>
                    Miles: {miles}
                  </Card.Description>
                  <Card.Description>
                    Stops: {stops}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    </>
  )
}

export default UserFavorites
