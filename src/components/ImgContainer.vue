<template>
  <img ref="imgRef" :src="urlStr" width="400" crossorigin="anonymous" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    url: String,
  },
  setup(props) {
    return {
      urlStr: props.url,
    };
  },
});
</script>

<style>
</style>
