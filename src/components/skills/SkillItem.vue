<script setup lang="ts">
defineProps({
  description: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, required: true },
})
</script>

<template>
  <!--SKILL-->
  <div class="projet-card">
    <a :href="link" target="_blank"><img alt="skill" :src="img" /></a>
    <p>{{ description }}</p>
  </div>
</template>
