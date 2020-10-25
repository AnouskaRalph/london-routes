import React from 'react'
import { getUserProfile } from '../../lib/api'
import {
  Container,
  Header,
  Image,
} from 'semantic-ui-react'


class UserProfile extends React.Component {
  state = {
    profileData: {
      username: '', 
      profile_image: ''
    }
  }
  async componentDidMount() {
    const response = await getUserProfile()
      this.setState({
        profileData: response.data
      })
      console.log('data', response)

  }

  render () {
    const { username, profile_image } = this.state.profileData
    return (
      <div>  
      <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>{username}</Header>  
        <Image src={profile_image} style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      </Container>

    </div>
    )
  }  
}

export default UserProfile