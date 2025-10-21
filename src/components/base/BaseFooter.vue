<script setup lang="ts">
import { Links } from '@/data/Links';
</script>

<template>
  <!--FOOTER-->
  <footer>
    <ul>
      <li>Entièrement réalisé à la main avec <a :href=Links.VUE>Vue.js</a></li>
      <li><router-link :to="{ name: 'archives' }">Archives</router-link></li>
      <li><a :href=Links.GITHUBIO>Code source</a></li>
      <li>&copy; 2026 - Work In Progress</li>
    </ul>
  </footer>
</template>
