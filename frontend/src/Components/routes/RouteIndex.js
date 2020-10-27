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
  }

  handleChange = (e) => {
    const filteredRoutes = this.state.routes.filter(route => route.difficulty === e.target)
    this.setState({ filteredRoutes })
    console.log('EVENT>>>>', e.target)
    console.log('FILTER ROUTES', filteredRoutes)
  }  


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
                  label='easy'
                  value='easy'
                  checked={value === 'easy'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='medium'
                  value='medium'
                  checked={value === 'medium'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='hard'
                  value='hard'
                  checked={value === 'hard'}
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
            {this.state.filteredRoutes ? this.state.filteredRoutes : this.state.routes.map(route => (<RouteCard key={route.id}  {...route} />))}
          </Container>
        </div>
      </>
    )
  }
}

export default RouteIndex