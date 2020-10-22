import React from 'react'
import { Form } from 'semantic-ui-react'
  
const options = [
  { key: 'tooting', text: 'Tooting', value: 'tooting' },
  { key: 'brixton', text: 'Brixton', value: 'brixton' },
  { key: 'tulse hill', text: 'Tulse Hill', value: 'tulse hill' },
]
  
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
          <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Borough'
            options={options}
            placeholder='Tulse Hill'
          />
        </Form.Group>
        </Form>
      )
    }
  }

export default RouteIndex