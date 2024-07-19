export default defineNuxtRouteMiddleware(async to => {
  if (to.fullPath == '/') {
    return navigateTo('/inicio')
  }
})