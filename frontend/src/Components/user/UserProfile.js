import React from 'react'
import { getUserProfile } from '../../lib/api'
import UserFavorites from './UserFavorites'
import { Link } from 'react-router-dom'


import {
  Container,
  Header,
  Image,
  Segment,
  Button
} from 'semantic-ui-react'

class UserProfile extends React.Component {
  state = {
    profileData: {
      username: '',
      profile_image: ''
    },
    favorite_routes: []
  }

  async componentDidMount() {
    const response = await getUserProfile()
    this.setState({
      profileData: response.data
    })
  }

  render() {
    const { username, profile_image, favorite_routes } = this.state.profileData
    return (
      <div>
        <Segment style={{ padding: '2em 0em' }} >
          <Container text style={{ marginTop: '5em' }}>
            <Header as='h1'>{username}</Header>
            <Image size='small' src={profile_image} style={{ marginTop: '2em' }} />
          </Container>
          <Container text style={{ marginTop: '2em' }}>
            <Header as='h1'>Saved Routes</Header>

            <Button
              style={{ marginTop: '20px' }}
              size='large'
              as={Link}
              to='/routeindex'
            >FIND A ROUTE</Button>
          </Container>
          <Container text style={{ marginTop: '2em' }}>
            {favorite_routes && favorite_routes.map(route => (
              <UserFavorites
                key={route.id}
                {...route} />
            ))
            }


          </Container>
        </Segment>
      </div>
    )
  }
}

export default UserProfile