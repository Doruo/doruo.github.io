<script setup lang="ts">
import { Links } from '@/data/Links'
</script>

<template>
  <!--FOOTER-->
  <footer>
    <ul>
      <li>Made in <a :href="Links.vue">Vue.js</a></li>
      <li><router-link :to="{ name: 'archives' }">Archives</router-link></li>
      <li><a :href="Links.githubPages">Code source</a></li>
      <li>&copy; 2024 - 2026 | Work In Progress</li>
    </ul>
  </footer>
</template>
