import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const api_gestion_autorizacion = axios.create({
  baseURL: 'http://localhost:8000/api',
})

const setCSRFToken = csrfToken => {
  api_gestion_autorizacion.defaults.headers['X-GA-CSRF-TOKEN'] = csrfToken
}

export { api_gestion_autorizacion, setCSRFToken }
