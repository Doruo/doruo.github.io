<script setup lang="ts">
</script>

<template>
  <!--HEADER-->
  <header class="header">
    <nav class="nav">
      <div class="branding">
        <h1><router-link :to="{ name: 'home' }">Marc Haye</router-link></h1>
        <h4>Développeur Professionel</h4>
      </div>

      <ul class="nav-links">
        <li><router-link :to="{ name: 'about' }">À Propos</router-link></li>
        <li>|</li>
        <li><router-link :to="{ name: 'projects' }">Projets</router-link></li>
        <li>|</li>
        <li><router-link to="/about#contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
