<template>
<div>
    <h1 class="text-amber-500 text-3xl">Portal de estudiantes</h1>
    <!-- ruta a /inicio -->
     <nav class="flex space-x-4 justify-center">
         <nuxt-link class="bg-sky-100 px-4 py-1" to="/inicio">Inicio</nuxt-link>
         <nuxt-link class="bg-sky-100 px-4 py-1" to="/alumno/perfil">Home</nuxt-link>
     </nav>
    
    <div>
        <slot />
    </div>
</div>
</template>