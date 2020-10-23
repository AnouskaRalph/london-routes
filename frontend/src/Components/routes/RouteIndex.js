import React from 'react'
import { Form } from 'semantic-ui-react'
import { getRoutes } from '../../lib/api'
import RouteShow from '../routes/RouteShow'
  
const options = [
  { key: 'tooting', text: 'Tooting', value: 'tooting' },
  { key: 'brixton', text: 'Brixton', value: 'brixton' },
  { key: 'tulse hill', text: 'Tulse Hill', value: 'tulse hill' },
]
  
  class RouteIndex extends React.Component {

    state = {
      routes: null
    }
    async componentDidMount() {
      const response = await getRoutes()
        this.setState({
          routes: response.data
        })
        console.log('>>>>NEW DATA', response.data)

  }
  
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      const { value } = this.state
      if (!this.state.routes) return null
      return (
        <>
        <div>
          {this.state.routes.map(route => (<RouteShow key={route.id}  {...route}/>))}
        </div>
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
        </>
      )
    }
  }

export default RouteIndex