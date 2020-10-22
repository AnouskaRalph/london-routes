import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/routes')
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
