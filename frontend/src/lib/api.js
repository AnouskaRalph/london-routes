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


export const addFavorites = (route) => {
  console.log('ROUTEEE FAV>>', route)
  return axios.post('/api/favorites', {route}, withHeaders())
}
export const getAllFavorites = (route) => {
  console.log('Getting favorites>>', route)
  return axios.get('/api/favorites', {route}, withHeaders())
}

export const removeFavorites = (_id) => {
  console.log('ID>>>>>>>', _id)
  return axios.put(`api/profile/${_id}`, null, withHeaders())
}


