import axios from 'axios'


//Authentication 

export const registerUser = (formData) => {
  return axios.post('/api/auth/register/', formData )
}
export const loginUser = (formData) => {
  return axios.post('/api/auth/login/', formData )
}

export const getUserProfile = () => {
  return axios.get('/api/auth/profile/', withHeaders())
}

//Routes

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


//Favorites

export const addFavorites = (id) => {
  console.log('ADDING FAV, ID>>>', id)
  return axios.post('/api/favorites/', id, withHeaders())
}

export const getAllFavorites = (route) => {
  console.log('Getting favorites>>', route)
  return axios.get('/api/favorites/', route, withHeaders())
}

export const removeFavorites = (_id) => {
  console.log('ID>>>>>>>', _id)
  return axios.put(`api/profile/${_id}`, null, withHeaders())
}

//Comments

export const addComment = (formData) => {
  // console.log('ADDING COMMENT, ID>>>', formData)
  return axios.post('/api/comments/', formData, withHeaders())
}

export const getAllComments = (route) => {
  // console.log('Getting all comments>>', route)
  return axios.get('/api/comments/', route, withHeaders())
}


