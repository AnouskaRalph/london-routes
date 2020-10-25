import React from 'react'
import { Form } from 'semantic-ui-react'
import { getRoutes, getRoutesFiltered } from '../../lib/api'
import RouteShow from '../routes/RouteShow'
  
const options = [
  { key: 'tooting', text: 'Tooting', value: 'tooting' },
  { key: 'brixton', text: 'Brixton', value: 'brixton' },
  { key: 'tulse hill', text: 'Tulse Hill', value: 'tulse hill' },
]
  
  class RouteIndex extends React.Component {

    state = {
      routes: null, 
      difficulty: '', 
      borough: ''
    }
    async componentDidMount() {
      const response = await getRoutes()
        this.setState({
          routes: response.data,
          borough: response.data.borough
        })
        console.log('data', response)
        console.log('>>>>>', response.borough)
    }
  
  // handleChange = (e) => {
  //   const radioValue = { value } 
  //     this.setState({ 
  //       radioValue })
  //     }

      // handleChange = (e) => {
      //   const radioValue = { ...this.state.options[e.target.value] } 
      //     this.setState({ 
      //       radioValue })
      //     }
  handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      const { value } = this.state
      if (!this.state.routes) return null
      return (
        <>    

      {this.state.routes.map(route => (<RouteShow key={route.id}  {...route}/>))}

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
            label='Area'
            options={options}
            placeholder='Area'
          />
        </Form.Group>
        </Form>
        </>
      )
    }
  }

export default RouteIndex