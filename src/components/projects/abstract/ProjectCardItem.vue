<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'

defineProps({
  title: {type: String, required: true},
  showMoreInfoLink: {type: Boolean, required: true },
  moreInfoLink: {type: Object as PropType<RouteLocationAsRelativeGeneric>, required: true},
  websiteLink: {type: String, required: true},
  background: {type: String, required: false},
})
</script>

<template>
  <!-- PROJECT CARD -->
  <router-link :to="moreInfoLink" v-if="showMoreInfoLink">
    <div class="project-card" :style="{ backgroundImage: `url(${background})` }">
      <h3>{{ title }}</h3>
      <p>
        <slot name="description"></slot>
      </p>
      <p>
        <b>Technologies: </b> <slot name="techs"></slot>
      </p>
    </div>
  </router-link>

  <a :href="websiteLink" v-else>
    <div class="project-card" :style="{ backgroundImage: `url(${background})` }">
      <h3>{{ title }}</h3>
      <p>
        <slot name="description"></slot>
      </p>
      <p>
        <b>Technologies: </b> <slot name="techs"></slot>
      </p>
    </div>
  </a>
</template>
