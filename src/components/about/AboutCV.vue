<script setup lang="ts">
  import LinkItem from '../links/LinkItem.vue';
import img from '/CV/CV-MARC-HAYE.pdf';
</script>

<template>
    <h1>
      <LinkItem :link="img" :img=img />
    </h1>
</template>