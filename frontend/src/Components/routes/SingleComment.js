import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'



function SingleComment({ text, owner: { username } }) {



  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author>{username}</Comment.Author>
            <Comment.Metadata>{text}</Comment.Metadata>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  )
}


export default SingleComment