<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="branding">
        <h1><router-link to="/">Marc Haye</router-link></h1>
        <p>Développeur Informatique</p>
      </div>
      <ul class="nav-links">
        <li><router-link to="/about">À Propos</router-link></li>
        <li>|</li>
        <li><router-link to="/projects">Projets</router-link></li>
        <li>|</li>
        <li><router-link to="/about#contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>

