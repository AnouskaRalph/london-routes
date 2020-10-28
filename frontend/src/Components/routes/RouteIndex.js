import React from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import { getRoutes } from '../../lib/api'
import RouteCard from './RouteCard'

// const options = [
//   { key: 'tooting', text: 'Tooting', value: 'tooting' },
//   { key: 'brixton', text: 'Brixton', value: 'brixton' },
//   { key: 'tulse hill', text: 'Tulse Hill', value: 'tulse hill' },
// ]

class RouteIndex extends React.Component {

  state = {
    routes: null,
    difficulty: '',
    borough: '',
    filteredRoutes: null
  }
  async componentDidMount() {
    const response = await getRoutes()
    this.setState({
      routes: response.data
    })
    console.log(response)
  }

  handleChange = (e, { value }) => {
    
    const filteredRoutes = this.state.routes.filter(route => route.difficulty === value)
    this.setState({
      filteredRoutes,
      value 

    })
    console.log('V>>>>', value)
    console.log('FILTER ROUTES', filteredRoutes)
  }
  // handleChange = (e, { value }) => this.setState({ value })


  render() {
    const { value } = this.state
    if (!this.state.routes) return null
    return (
      <>
        <div>
          <Container text style={{ marginTop: '2em' }}>
            <Header as='h1'>Find your route</Header>
            <Form>
              <Form.Group inline>
                <label>Difficulty</label>
                <Form.Radio

                  label='Easy'
                  value='Easy'
                  checked={value === 'Easy'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='Medium'
                  value='Medium'
                  checked={value === 'Medium'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='Hard'
                  value='Hard'
                  checked={value === 'Hard'}
                  onChange={this.handleChange}
                />
              </Form.Group>

              {/* <Form.Group widths='equal'>
                <Form.Select
                  fluid
                  label='Area'
                  options={options}
                  placeholder='Area'
                />
              </Form.Group> */}
            </Form>
            {this.state.filteredRoutes ? this.state.filteredRoutes.map(route => (<RouteCard key={route.id}  {...route} />)) : this.state.routes.map(route => (<RouteCard key={route.id}  {...route} />))}
          </Container>
        </div>
      </>
    )
  }
}

export default RouteIndex