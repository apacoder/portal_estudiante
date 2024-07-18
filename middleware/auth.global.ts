import { api_gestion_autorizacion, setCSRFToken } from '~/server/axios'

export default defineNuxtRouteMiddleware(async to => {
  const user = useState('user')
  
  const is_index = to.path === '/'
  const is_login = to.path === '/login'
  const is_auth = toRaw(user.value)

  try {
    if(!is_auth) {
      const {data} = await api_gestion_autorizacion.post('/google_one_tap/refresh_token')
      user.value = {
        nombre: 'nombre',
        apellido: 'apellido',
      }
      console.log(data)
      
      setCSRFToken(data.ga_csrf_token)
    }
  } catch (error) {
    if (to.path != '/login') 
      return navigateTo('/login')
  }


  // Si el usuario está autenticado y va a /login o /, redirigir a /inicio
  if (is_auth && (is_login || is_index)) 
    return navigateTo('/inicio')
  
  // Si el usuario no está autenticado y no va a /login, redirigir a /login
  if (!is_auth && !is_login) 
    return navigateTo('/login')

  // Si el usuario está autenticado y no va a /login, continuar normalmente
  if (is_index) 
    return navigateTo('/inicio')
})