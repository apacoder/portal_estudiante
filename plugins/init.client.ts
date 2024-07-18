import { api_gestion_autorizacion } from '~/server/axios'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      async refreshGoogleToken() {
        try {
          const { data } = await api_gestion_autorizacion.post('/google_one_tap/refresh_token')
          console.log(data)
          return data
        } catch (e) {
          return navigateTo('/login')
        }
      },
    },
  }
})
