<template>
  <img ref="imgRef" src="{urlStr}" width="400" crossorigin="anonymous" />
  <p>{urlStr}</p>
</template>
<script lang="ts">
export default {
  props: {
    url: String,
  },

  setup(props) {
    return {
      urlStr: props.url,
    };
  },
};
</script>

<style>
.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
