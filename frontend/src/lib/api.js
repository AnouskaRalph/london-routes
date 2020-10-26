import axios from 'axios'


//Authentication 

export const registerUser = (formData) => {
  return axios.post('/api/auth/register/', formData )
}
export const loginUser = (formData) => {
  return axios.post('/api/auth/login/', formData )
}

export const getRoutes = () => {
  return axios.get('./api/routes')
}
export const getSingleRoute = (route_id) => {
  // console.log('ID HERE>>>>', route_id)
  return axios.get(`/api/routes/${route_id}`)
  
}

function withHeaders(){
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// USER & FAVORITES

export const getUserProfile = () => {
  return axios.get('/api/auth/profile/', withHeaders())
}



export const addFavorites = (route_id) => {
  console.log('ROUTEEE FAV>>', route_id)
  return axios.post('/api/favorites/', route_id, withHeaders())
}

export const getAllFavorites = (route) => {
  console.log('Getting favorites>>', route)
  return axios.get('/api/favorites/', route, withHeaders())
}

export const removeFavorites = (_id) => {
  console.log('ID>>>>>>>', _id)
  return axios.put(`api/profile/${_id}`, null, withHeaders())
}


