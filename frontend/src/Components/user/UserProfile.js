import React from 'react'
import { getUserProfile } from '../../lib/api'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'


class UserProfile extends React.Component {
  state = {
    profileData: null
  }
  async componentDidMount() {
    const response = await getUserProfile()
      this.setState({
        profileData: response.data
      })
      console.log('data', response)

  }

  render () {
    return (
      <div>  
      <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'></Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
        </p>
  
        <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
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