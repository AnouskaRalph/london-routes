import React from 'react'
import { 
  Card, 
  Image, 
  Grid, 
  Segment
 } 
from 'semantic-ui-react'

const UserFavorites = ({ route: { image, borough, miles, stops }}) => {

return (
    <>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
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
      </Card.Content>
    </Card>


          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  </>
)
}

export default UserFavorites

// import React from 'react'
// import { Card, Image, Button, Popup } from 'semantic-ui-react'
// import { getAllFavorites } from '../../lib/api'

// class UserFavorites extends React.Component {

//   state = {
//     route: {
//       image: '', 
//       miles: '', 
//       borough: '', 
//       stops: ''
//     }, 
//     id: ''
//   }

//   async componentDidMount() {
//     const route_id = this.props.match.params.id
//     console.log('ROUTE ID HELLO >>>>>', route_id)
//     const response = await getAllFavorites()
//     console.log('RESPONSE HERE>>', response)
//     this.setState({
//       route: response.data
//       // id: response.data.id
//     })
//     // console.log('DATA ID', response.data.id)
//   }
//   // handleClick = async (e) => {
//   //   const routeId = this.props.match.params.id
//   //   const response = await addFavorites({ route: routeId })
//   //   // console.log(response.data) 
//   // }
// render() {
//   if (!this.state.route) return null
//   const { image, stops, miles, borough } = this.state.route
//   return (
//     <>
//     <Card>
//     <Image src={image} style={{ marginTop: '2em' }} />
//       <Card.Content>
//         <Card.Header>{borough}</Card.Header>
//         <Card.Description>{miles}
//         </Card.Description>
//         <Card.Description>
//         {stops}
//         </Card.Description>
//         <Popup
//         trigger={<Button icon='delete'
//         // onClick={this.handleClick}
//         // id={id}
//         />}
//         content='Delete route'
//         inverted
//       />
//       </Card.Content>
//     </Card>
//   </>
// )
// }

// }


// export default UserFavorites

