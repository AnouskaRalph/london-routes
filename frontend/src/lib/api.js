import axios from 'axios'


//Authentication 

export const registerUser = (formData) => {
  return axios.post('/api/register/', formData )
}
// export const loginUser = (formData) => {
//   return axios.post('/api/login/', formData )
// }
