import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'
import { getRoutes } from '../../lib/api'
import { Link } from 'react-router-dom'


class RouteCard extends React.Component {
  state = {
    route: null
  }

  async componentDidMount() {
    const response = await getRoutes()
    this.setState({
      routes: response.data
    })
  }

  render() {
    const { id, image, stops, miles, borough, difficulty } = this.props
    return (
      <>
        <Link to={`/routeshow/${id}`} >
          <Grid>
            <Grid.Row>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Column
              className='home-column-box'
              floated='left'
              width={7}
            >
              <Card>
                <Image src={image} style={{ marginTop: '0em' }} />
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
              <div id='street-img' className='home-images'></div>
            </Grid.Column>
            <Grid.Column
              className='home-column-box'
              floated='right'
              width={7}
            >
            </Grid.Column>
          </Grid>
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



