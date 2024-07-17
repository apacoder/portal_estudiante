<template>
    <div id="googleButton" class="w-[300px]"/>
</template>
<script setup>
definePageMeta({ layout: false})

const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  window.onload = () => {
    google.accounts.id.initialize({
      client_id: runtimeConfig.public.googleClientId,
      callback: handleCredentialResponse,
    })
    google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { theme: 'outline', size: 'large' }, 
    )
    google.accounts.id.prompt()
  }
})
  
function handleCredentialResponse(response) {
  console.log(response)
}
</script>