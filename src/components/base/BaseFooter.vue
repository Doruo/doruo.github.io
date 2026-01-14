<script setup lang="ts">
import { GithubLinks, ToolLinks } from '@/data/Links'
</script>

<template>
  <!--FOOTER-->
  <footer>
    <ul>
      <li><router-link :to="{ name: 'archives' }">Archives</router-link></li>
      <li><a :href="GithubLinks.PORTFOLIO">Source Code</a></li>
      <li>100% Human made with <a :href="ToolLinks.VUEJS">Vue.js</a></li>
      <li>&copy; 2024 - 2026 Marc Haye | All Rights Reserved</li>
    </ul>
  </footer>
</template>
