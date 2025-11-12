<script setup lang="ts">
defineProps({
  link: { type: String, required: true, }
})
</script>

<template>
  <div class="project-image">
    <a target="_blank" :href="link">
      <img alt="project-image" :src="link" /></a>
  </div>
</template>
