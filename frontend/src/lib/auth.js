export function setToken(token){
  localStorage.setItem('token', token)
}

export const getToken = () =>{
  return localStorage.getItem('token')
}

export function isUser(isUser){
  return localStorage.setItem('isUser', isUser)
}

export function checkIsUser(){
  if (localStorage.getItem('isUser') === 'false'){
    return false
  }
  return localStorage.getItem('isUser')
}

export function logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('isUser')
}

const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  
  return JSON.parse(atob(parts[1]))
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.floor(Date.now() / 1000)
  return now < payload.exp
}

