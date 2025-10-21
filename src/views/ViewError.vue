<script setup lang="ts">
</script>

<template>
  <!-- VIEW ERROR -->
  <div class="erreur">
    <h1>
      No page found !
    </h1>
    <router-link :to="{ name: 'home' }"><h2>Return home</h2></router-link>
  </div>
</template>
