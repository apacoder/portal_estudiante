<script setup>
import { api_gestion_autorizacion, setCSRFToken } from './server/axios'
import { onMounted } from 'vue'

const route = useRoute()

const user = useState('user')
const is_loaded = ref(false)


const fetchUser = async () => {
  try {
    if (import.meta.client) {  
      const csrf_token = localStorage.getItem('sKey_456DEF')
      if (csrf_token) {
        setCSRFToken(csrf_token)
      }
    }

    const response = await api_gestion_autorizacion.get('/auth/user')
    user.value = response.data
  } catch (error) {
    if (route.fullPath !== '/login') {
      window.location.href = '/login'
    }
  } finally {
    is_loaded.value = true
  }

}

onMounted(() => {
  fetchUser()
})
</script>


<template>
  <NuxtLayout v-if="is_loaded" >
    <NuxtPage />
  </NuxtLayout>
</template>

