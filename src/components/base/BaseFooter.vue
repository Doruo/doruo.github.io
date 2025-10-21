<script setup lang="ts">
import { Links } from '@/data/Links';
</script>

<template>
  <!--FOOTER-->
  <footer>
    <div class="conteneur">
      <p>
        Entièrement réalisé à la main avec <a :href=Links.VUE>Vue.js</a>
      </p>
      <p>
        <a :href=Links.GITHUBIO>Code source</a>
      </p>
      <p>
        <router-link :to="{ name: 'archives' }">Archives</router-link>
      </p>
      <p>&copy; 2026 - Work In Progress</p>
    </div>
  </footer>
</template>
