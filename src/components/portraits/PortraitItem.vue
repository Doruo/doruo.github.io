<script setup lang="ts">
defineProps({
  link: { type: String, required: false, },
  img: { type: String, required: false, },
  name: { type: String, required: false, },
  alt: { type: String, required: false, },
})
</script>

<template>
  <div class="container-portrait">
    <a target="_blank" :href="link">
      <img class="portrait" :src="img" :alt="alt" />
      <div> {{ name }} </div>
    </a>
  </div>
</template>
