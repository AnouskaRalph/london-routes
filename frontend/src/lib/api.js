import axios from 'axios'


//Authentication 

export const registerUser = (formData) => {
  console.log('formData', formData)
  return axios.post('/api/auth/register/', formData )
}
export const loginUser = (formData) => {
  return axios.post('/api/auth/login/', formData )
}

export const getRoutes = () => {
  return axios.get('./api/routes')
}
