import React from 'react'
import { Card, Image, Button, Popup } from 'semantic-ui-react'


const RouteShow = (props) => { 

  const { image, stops, miles, borough, difficulty } = props

  return (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{borough}</Card.Header>
      <Card.Meta>
        <span className='date'>{stops}</span>
        </Card.Meta>
        <Card.Description>
          {miles}
          {difficulty}
        </Card.Description>
        <Popup
      trigger={<Button icon='add' />}
      content='Save route'
      inverted
    /> 
    </Card.Content>
    </Card>
  )
}

export default RouteShow



// import React from 'react'
// // import { Link } from 'react-router-dom'
// import { Card, Image, Button, Popup, Icon } from 'semantic-ui-react'
// import { checkIsUser, isAuthenticated, isUser } from '../../lib/auth' 
// import { getRoutes } from '../../lib/api'

// class RouteShow extends React.Component {
//     state = {
//       routes:  {
//         image: '', 
//         stops: '',
//         miles: '', 
//         borough: '',
//         difficulty: ''
//       }
//     }
  
//     // authenticated() {
//     //   return isAuthenticated()
//     // }

//     async componentDidMount() {
//       const response = await getRoutes()
//       this.setState({
//         routes: response.data,
//       })
//       console.log('1111data', response)

//     }

//   render () {
//     if (!this.state.routes) return null
//     const { image, stops, miles, borough, difficulty } = this.state
//     return (
//       <Card>
//         <Image src={image} wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>{borough}</Card.Header>
//           <Card.Meta>
//             <span className='date'>{stops}</span>
//             </Card.Meta>
//             <Card.Description>
//               {miles}
//               {difficulty}
//             </Card.Description>
//         {isUser() && isAuthenticated() &&
//             <Popup
//           trigger={<Button icon='add' />}
//           content='Save route'
//           inverted
//         /> }
//             {/* <Popup
//           trigger={<Button icon='add' />}
//           content='To save route please register'
//           inverted
//         /> */}
//           </Card.Content>
//         </Card>
//     )
//   }
// } 
// export default RouteShow