<template>
    <div id="googleButton" class="w-[300px]"/>
</template>
<script lang="ts" setup>
definePageMeta({ layout: false})

onMounted(() => {
  window.onload = () => {

    google.accounts.id.initialize({
      client_id: 'CLIENT_ID', // your Google OAuth client ID
      callback: handleCredentialResponse, //method to run after user clicks the Google sign in button
    })
    google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { theme: 'outline', size: 'large' }, // customization attributes
    )
    google.accounts.id.prompt() // also display the One Tap dialog
  }
})
  
function handleCredentialResponse(response) {
  // call your backend API here
  console.log(response)
}
</script>