<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  techs: {
    type: String,
    required: true,
  },
  moreInfoLink:{
    type: String,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="projet-card">
    <h3>{{ title }}</h3>

    <p>
      <slot name="description"></slot>
    </p>
    <p>
      <b>Technologies:</b> {{ techs }}
    </p>

    <div class="projet-liens">
      <a :href="moreInfoLink">En savoir plus</a>
      <a :href="websiteLink">Visiter le site</a>
    </div>
  </div>
</template>

<style scoped>

</style>
