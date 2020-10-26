import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Navbar from './Components/common/Navbar'

import Register from './Components/auth/Register'
import Login from './Components/auth/Login'
import UserProfile from './Components/user/UserProfile'


import RouteIndex from './Components/routes/RouteIndex'
import RouteDirections from './Components/routes/RouteDirections'
import RouteShow from './Components/routes/RouteShow'


class App extends React.Component {
  // async componentDidMount() {
  //   try {
  //     const response = await fetch('/api/routes')
  //     const data = await response.json()
  //   } catch (err) {
  //     console.log(data)
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/routeindex' component={RouteIndex} />
          <Route exact path='/routedirections' component={RouteDirections} />
          <Route exact path='/routeshow/:id' component={RouteShow} />
          <Route exact path='/userprofile' component={UserProfile} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
