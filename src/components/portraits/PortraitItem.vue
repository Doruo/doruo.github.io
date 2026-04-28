<script setup lang="ts">
defineProps({
  link: { type: String, required: false, },
  img: { type: String, required: false, },
  name: { type: String, required: false, },
  alt: { type: String, required: false, },
  isMain: { type: Boolean, required: false, },
})
</script>

<template>
  <div class="container-portrait" v-if="isMain">
    <a target="_blank" :href="link">
      <img class="main-portrait" :src="img" alt="main portrait" />
      <div> {{ name }} </div>
    </a>
  </div>
  <div class="container-portrait" v-else>
    <a target="_blank" :href="link">
      <img class="portrait" :src="img" alt="collaborator portrait" />
      <div> {{ name }} </div>
    </a>
  </div>
</template>
