import React from 'react'
import { Comment } from 'semantic-ui-react'
import { getUserProfile } from '../../lib/api'
// import { deleteComment } from '../../lib/api'
import { isAuthenticated } from '../../lib/api'

class SingleComment extends React.Component {

  state = {
    profileData: {
      username: '',
      profile_image: ''
    },
    showComment: true
  }

  async componentDidMount() {
    if (isAuthenticated()) {
      try {
        const resGetUser = await getUserProfile()
        console.log('USER', resGetUser)
        this.setState({
          currentUserProfile: resGetUser.data
        })
      } catch (err) {
        console.log(err)
      }
    }

  }
  render() {
    const { text, createdAt } = this.props
    const { username, profile_image } = this.props.profileData
    const createdAtSliced = createdAt.slice(0, 10)

    if (!this.state.showComment) return null
    return (

      <>
        <Comment>
          <Comment.Avatar src={profile_image} />
          <Comment.Content>
            <Comment.Author as='a'><span>{username}</span></Comment.Author>
            <Comment.Metadata>
              <div>{createdAtSliced}</div>
            </Comment.Metadata>
            <Comment.Text>{returnedComment}</Comment.Text>
          </Comment.Content>
        </Comment>


      </>
    )
  }

}

export default SingleComment