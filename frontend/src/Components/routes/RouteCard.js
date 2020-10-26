import React from 'react'
import { Card } from 'semantic-ui-react'
import { addFavorites, getRoutes } from '../../lib/api'
import { Link } from 'react-router-dom'


class RouteCard extends React.Component  {
  state = {
    route: null,
  }
  
  async componentDidMount() {
    const response = await getRoutes()
    this.setState({
      routes: response.data
    })
  }

  handleClick = async (e) => {
    await addFavorites(this.props.route)
    console.log('clicked')
  }

  render() {
    const { _id, stops, miles, borough, difficulty } = this.props
    console.log(this.props)
    return (
      <>
      <Link to={`/routeshow/${_id}`} >
        <Card>
          <div id='parks-card-img' className='home-card-imgs'></div>
          <Card.Content>
            <Card.Header>{borough}</Card.Header>
            <Card.Description>
              Miles: {miles}
            </Card.Description>
            <Card.Description>
              Stops: {stops}
            </Card.Description>
            <Card.Description>
              Difficulty: {difficulty}
            </Card.Description>
          </Card.Content>
        </Card>
        </Link>
      </>
    )
    }
}

export default RouteCard








// import React from 'react'
// import { Card, Button, Popup } from 'semantic-ui-react'


// const RouteShow = (props) => {

//   const { stops, miles, borough, difficulty } = props

//   return (
//     <>
//       <Card>
//         <div id='parks-card-img' className='home-card-imgs'></div>
//         <Card.Content>
//           <Card.Header>{borough}</Card.Header>
//           <Card.Description>
//             Miles: {miles}
//           </Card.Description>
//           <Card.Description>
//             Stops: {stops}
//           </Card.Description>
//           <Card.Description>
//             Difficulty: {difficulty}
//           </Card.Description>
//           <Popup
//             trigger={<Button icon='add' />}
//             content='Save route'
//             inverted
//           />
//         </Card.Content>
//       </Card>
//     </>
//   )
// }

// export default RouteShow



