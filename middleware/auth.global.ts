import { is_authenticated } from '~/server/auth'

export default defineNuxtRouteMiddleware(to => {
  const is_index = to.path === '/'
  const is_login = to.path === '/login'
  const is_auth  = is_authenticated()

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