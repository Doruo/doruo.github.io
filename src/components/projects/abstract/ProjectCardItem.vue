<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true,
  },
  showMoreInfoLink: {
    type: Boolean,
    required: true,
  },
  moreInfoLink: {
    type: Object as PropType<RouteLocationAsRelativeGeneric>,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- PROJECT CARD -->
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>
      <slot name="description"></slot>
    </p>
    <p>
      <b>Technologies: </b>
      <slot name="techs"></slot>
    </p>

    <div class="project-links">
      <router-link v-if="showMoreInfoLink" :to="moreInfoLink">À Propos</router-link>
      <a :href="websiteLink" target="_blank">See</a>
    </div>
  </div>
</template>
