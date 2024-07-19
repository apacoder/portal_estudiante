<script setup>
import { api_gestion_autorizacion } from './server/axios'

const route = useRoute()

const user = useState('user')

const is_loaded = ref(false)

const fetchUser = async () => {
  try {
    const response = await api_gestion_autorizacion.get('/auth/user')
    console.log(response)
    user.value = response.data
    is_loaded.value = true
  } catch (error) {
    is_loaded.value = true
    console.log('errorsisto')
    if( route.fullPath !== '/login') {
      window.location.href = '/login'
    }
  }
}
fetchUser()
</script>

<template>
<b>{{ route.fullPath }}</b>
<pre>{{ user }}</pre>
<NuxtLayout v-if="route.fullPath == '/login' || is_loaded">
  <NuxtPage />
</NuxtLayout>
</template>
