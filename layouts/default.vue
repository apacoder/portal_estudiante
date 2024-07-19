<script setup>
import { api_gestion_autorizacion } from '~/server/axios'
const user = useState('user')

const logout = async () => {
  await api_gestion_autorizacion.post('/google/logout')
  user.value = null
  localStorage.clear()
  window.location.href = '/login'
}
</script>
<template>
<div>
    <h1 class="text-amber-500 text-3xl">Portal de estudiantes</h1>
    <!-- ruta a /inicio -->
     <nav class="flex space-x-4 justify-center">
         <nuxt-link class="bg-sky-100 px-4 py-1" to="/inicio">Inicio</nuxt-link>
         <nuxt-link class="bg-sky-100 px-4 py-1" to="/alumno/perfil">Perfil</nuxt-link>
         <button class="bg-sky-100 px-4 py-1" @click="logout">Cerrar sesión</button> 
     </nav>
    
    <div>
        <slot />
    </div>
</div>
</template>