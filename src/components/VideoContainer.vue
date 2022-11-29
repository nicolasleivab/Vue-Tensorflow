<template>
    <video ref="videoRef" width="400" autoplay="true" />
</template>
  
  <script lang="ts">
  import { ref, defineExpose } from "vue";
  
  export default {
    setup() {
        const videoRef = ref("");
        defineExpose({ videoRef });
    },
  };
  </script>
  
  <style>
  </style>
  