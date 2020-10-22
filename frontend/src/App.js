import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Navbar from './Components/common/Navbar'
import Register from './Components/auth/Register'
import Login from './Components/auth/Login'

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
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
