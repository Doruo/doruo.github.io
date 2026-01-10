<script setup lang="ts">
import { GithubLinks, ToolLinks } from '@/data/Links'
</script>

<template>
  <!--FOOTER-->
  <footer>
    <ul>
      <li>Made in <a :href="ToolLinks.VUEJS">Vue.js</a></li>
      <li><router-link :to="{ name: 'archives' }">Archives</router-link></li>
      <li><a :href="GithubLinks.PAGES">Code source</a></li>
      <li>&copy; 2024 - 2026 | Work In Progress</li>
    </ul>
  </footer>
</template>
