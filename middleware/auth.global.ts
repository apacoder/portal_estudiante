import { is_authenticated } from '~/server/auth'

export default defineNuxtRouteMiddleware(async to => {
  const is_index = to.path === '/'
  console.log('Accediendo a la ruta', to.path)
  
  if(is_index && is_authenticated()) navigateTo('/inicio')
})