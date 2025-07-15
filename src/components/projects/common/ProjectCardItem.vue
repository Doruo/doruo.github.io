<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  showMoreInfoLink:{
    type: Boolean,
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
    <h3>
      <u>{{title}}</u>
    </h3>
    <p>
      <slot name="description"></slot>
    </p>
    <p>
      <b>Technologies:</b> <slot name="techs"></slot>
    </p>

    <div class="projet-liens">
      <router-link v-if="showMoreInfoLink" :to="moreInfoLink">En savoir plus</router-link>
      <a :href="websiteLink">Visiter la page</a>
    </div>
  </div>
</template>

<style scoped>

</style>
