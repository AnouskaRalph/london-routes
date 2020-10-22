import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'



class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      userimage: ''
    },
  }

  // handleChange = (e) => {
  //   console.log(e.target.value)
  //   const formData = {
  //     ...this.state.formData,
  //     [e.target.name]: e.target.value
  //   }
  //   this.setState({ formData })
  // }


  render() {

  const { username, email, password, passwordConfirmation } = this.state.formData

    return (
<Grid textAlign = 'center' style = {{ height: '100vh' }} verticalAlign = 'middle' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShlvg6mJvj6VZKv46Ultcibd4Dah5vRo2LXA&usqp=CAU' alt='Woman on bike' /> Register
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' 
            placeholder='User name'
            // onChange={this.handleChange}
            // value={username}
            />
            <Form.Input fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail address'
            // onChange={this.handleChange}
            // value={email}
            
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              // onChange={this.handleChange}
              // value={password}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password confirmation'
              type='password'
              // onChange={this.handleChange}
              // value={passwordConfirmation}
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