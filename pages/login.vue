<template>
    <div id="googleButton" class="w-[300px]"/>
    <span class="inline-block mt-3 border px-3" @click="testTequest">Test request</span>
</template>
<script setup>
import { api_gestion_autorizacion, setCSRFToken } from '~/server/axios'

definePageMeta({ layout: false})

const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  window.onload = () => {
    google.accounts.id.initialize({
      client_id: runtimeConfig.public.GOOGLE_CLIENT_ID,
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
  setCSRFToken(data.ga_csrf_token)
  console.table(data)
}

const testTequest = () => {
  api_gestion_autorizacion.post('/test_request').then(({ data }) => {
    console.table(data)
  })
}

</script>