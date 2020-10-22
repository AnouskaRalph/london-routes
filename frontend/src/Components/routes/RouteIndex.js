import React from 'react'
import { Form } from 'semantic-ui-react'
  
  
  class RouteIndex extends React.Component {
    state = {}
  
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      const { value } = this.state
      return (
        <Form>
          <Form.Group inline>
            <label>Difficulty</label>
            <Form.Radio
              label='Easy'
              value='easy'
              checked={value === 'easy'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Medium'
              value='medium'
              checked={value === 'medium'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Hard'
              value='hard'
              checked={value === 'hard'}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      )
    }
  }

export default RouteIndex