import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { isAuthenticated, checkIsUser, logout } from '../../lib/auth'
import { getUserProfile } from '../../lib/api'

class Navbar extends React.Component {

  state = {
    activeItem: '',
    isUser: false
  }

  authenticated() {
    return isAuthenticated()
  }

  async componentDidMount() {
    try {
      if (this.authenticated()) {
        const res = await getUserProfile()
        this.setState({
          isUser: res.data.isUser
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogoutClick = (e, { name }) => {
    logout()
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>

          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}
            to='/'
          />
            <Menu.Item
            name='routes'
            active={activeItem === 'routes'}
            onClick={this.handleItemClick}
            as={Link}
            to='/routeindex'
          />
          {!isAuthenticated() &&
            <Menu.Item
              name='register'
              active={activeItem === 'register'}
              onClick={this.handleItemClick}
              as={Link}
              to='/register'
            />
          }
      {!isAuthenticated() &&
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            as={Link}
            to={'/login'}
          />
          }
          {isAuthenticated() &&
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
              as={Link}
              to={'/userprofile'}
            />
            }
      {isAuthenticated() &&
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogoutClick}
            as={Link}
            to={'/'}
          />
            }
        </Menu>
      </Segment>
    )
  }
}

export default Navbar