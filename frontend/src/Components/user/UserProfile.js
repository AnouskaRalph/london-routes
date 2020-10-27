import React from 'react'
import { getUserProfile } from '../../lib/api'

import {
  Container,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
import UserFavorites from './UserFavorites'

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

  render () {
    const { username, profile_image, favorite_routes} = this.state.profileData
    return (
      <div>  
    <Segment style={{ padding: '2em 0em' }} vertical id='features'>
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h1'>{username}</Header>  
      <Image src={profile_image} style={{ marginTop: '2em' }} />
    </Container>

    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Saved Routes</Header> 
    </Container>

    <Container text style={{ marginTop: '7em' }}>
    { favorite_routes && favorite_routes.map(route => (
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