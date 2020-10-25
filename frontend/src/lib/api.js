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

export const getUserProfile = () => {
  return axios.get('/api/auth/profile/', withHeaders())
}

