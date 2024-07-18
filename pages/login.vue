<template>
    <div id="googleButton" class="w-[300px]"/>
    <span class="inline-block mt-3 border px-3" @click="testTequest">Test request</span>
</template>
<script setup>
import { api_gestion_autorizacion, setCSRFToken } from '~/server/axios'
import env from '~/config/env'

useState('user', () => null)

definePageMeta({ layout: false})

onMounted(() => {
  window.onload = () => {
    google.accounts.id.initialize({
      client_id: env.GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    })
    google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { theme: 'outline', size: 'large' }, 
    )
    google.accounts.id.prompt()
  }
})
  
async function handleCredentialResponse(response) {
  const { data } = await api_gestion_autorizacion.post('/google_one_tap/login', { credential: response.credential })
  const user = useState('user')
  setCSRFToken(data.ga_csrf_token)
  user.value = {
    nombre: 'nombre',
    apellido: 'apellido',
  }
  console.table(data)
  return navigateTo('/inicio')
}

async function testTequest() {
  const { data } = await api_gestion_autorizacion.post('/test_request')
  const user = useState('user')
  user.value = {
    nombre: 'nombre',
    apellido: 'apellido',
  }
  

  console.log('fom login', toRaw(user.value))
  
  

  return navigateTo('/inicio')
}

</script>