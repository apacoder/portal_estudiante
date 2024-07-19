<script setup>
import { api_gestion_autorizacion, setCSRFToken } from './server/axios'

const route = useRoute()

const user = useState('user')

const is_loaded = ref(false)

const fetchUser = async () => {
  try {
    const csrf_token = localStorage.getItem('sKey_456DEF')
    if (csrf_token) 
      setCSRFToken(localStorage.getItem('sKey_456DEF'))
    
    const response = await api_gestion_autorizacion.get('/auth/user')
    user.value = response.data
    is_loaded.value = true
  } catch (error) {
    is_loaded.value = true
    if( route.fullPath !== '/login') {
      window.location.href = '/login'
    }
  }
}
fetchUser()
</script>

<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</template>
