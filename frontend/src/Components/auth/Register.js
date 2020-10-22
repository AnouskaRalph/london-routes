import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { registerUser } from '../../lib/api'


class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      profile_image: '',
      password: '',
      password_confirmation: ''
    },
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    // console.log('>>>>>gets here')
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const dataToSend = ({ ...this.state.formData })
    try {
      const response = await registerUser(dataToSend)
      if (response.status === 201) {
        this.setState({
          redirect: '/login'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {

    const { username, email, profile_image, password, password_confirmation } = this.state.formData

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShlvg6mJvj6VZKv46Ultcibd4Dah5vRo2LXA&usqp=CAU' alt='Woman on bike' /> Register
      </Header>
          <Form inverted onSubmit={this.handleSubmit} size='large'>
            <Segment inverted stacked>
              <Form.Input fluid icon='user' iconPosition='left'
                placeholder='Username'
                onChange={this.handleChange}
                value={username}
                name='username'
              />
              <Form.Input fluid icon='user'
                iconPosition='left'
                placeholder='Email'
                onChange={this.handleChange}
                value={email}
                name='email'
              />
                <Form.Input fluid icon='photo'
                iconPosition='left'
                placeholder='Photo'
                onChange={this.handleChange}
                value={profile_image}
                name='profile_image'

              />

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
                value={password}
                name='password'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
                onChange={this.handleChange}
                value={password_confirmation}
                name='password_confirmation'
              />

              <Button color='black' fluid size='large'>
                Register
          </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid >
    )
  }

}

export default Register