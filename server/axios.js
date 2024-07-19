import axios from 'axios'
import env from '~/config/env'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const api_gestion_autorizacion = axios.create({
  baseURL: env.API_GESTION_AUTORIZACION,
})

const setCSRFToken = csrfToken => {
  api_gestion_autorizacion.defaults.headers['X-GA-CSRF-TOKEN'] = csrfToken
  localStorage.setItem('sKey_456DEF', csrfToken)
}

export { api_gestion_autorizacion, setCSRFToken }
