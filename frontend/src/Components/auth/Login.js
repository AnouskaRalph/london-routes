import React from 'react'
import { Redirect } from 'react-router-dom'

import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'

import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'


class Login extends React.Component {

  state = {
    formData: {
      email: '',
      password: ''
    }, 
    formErrorHandler: false
  }

handleChange = (e) => {
  const formData = {
    ...this.state.formData, 
    [e.target.name]: e.target.value
  }
  this.setState({
    formData,
    formErrorHandler: false 
  })
}

handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await loginUser(this.state.formData)
    this.setState({
      redirect: '/userprofile'
    })
    setToken(response.data.token)
  } catch (err) {
    this.setState({ formErrorHandler: true })
  } 
}
  render() {
    const { email, password } = this.state.formData

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShlvg6mJvj6VZKv46Ultcibd4Dah5vRo2LXA&usqp=CAU' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit} 
      error={this.state.formErrorHandler} > {this.state.formErrorHandler ? (
            <Message error header='Error' pointing= 'below' content='Invalid details' />
            ) : null }
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
          onChange={this.handleChange}
          value={email}
          name='email'
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
          <Button color='black' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    )
  }
}

export default Login