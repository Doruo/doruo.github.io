<script setup lang="ts">
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import { ref } from 'vue'

const CV_FILE_PATH = "/CV-MARC-HAYE.pdf";
const pdfFile = ref<string>(CV_FILE_PATH);
</script>

<template>
  <div :style="{ width: '1920px', height: '1080px' }">
    <VPdfViewer :src=pdfFile />
  </div>
</template>

<style scoped>
</style>
