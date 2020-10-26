import React from 'react'
import { getUserProfile, getAllFavorites } from '../../lib/api'

import {
  Container,
  Header,
  Image,
} from 'semantic-ui-react'
import UserFavorites from './UserFavorites'

class UserProfile extends React.Component {
  state = {
    profileData: {
      username: '', 
      profile_image: ''
  
    }, favorite_routes: []
  }

  async componentDidMount() {
    const response = await getUserProfile()
      this.setState({
        profileData: response.data
      })  
    }

  render () {
    const { username, profile_image, favorite_routes} = this.state.profileData
    console.log('HERE1>>>', favorite_routes)
    return (
      <div>  
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>{username}</Header>  
      <Image src={profile_image} style={{ marginTop: '2em' }} />
    </Container>

    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Saved Routes</Header> 
    </Container>
      {/* { this.state.favorite_route.map(favorite => (
          <UserFavorites
            key={route._id}
              {...route} />
              )) } */}
    </div>
    )
  }  
}

export default UserProfile