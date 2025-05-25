<script setup lang="ts">
import Portfolio from './views/Portfolio.vue';

defineProps<{
  msg: string,
  requiered: false
}>()
</script>

<template>

  <header>
    <nav class="entete">
      <h1><a href="./portfolio.html">Marc Haye</a></h1>
      <p>Futur Développeur Full-Stack</p>
    </nav>
  </header>

 <Portfolio/>

</template>

<style scoped>

header {
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: #2c3e50;
  color: white;
  padding: 10px 0;
  text-align: center;
}
</style>

