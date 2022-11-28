<template>
  <FlexBox
    ><FlexItem>Hi</FlexItem
    ><FlexItem
      ><ImgContainer
        url="https://images.unsplash.com/photo-1567581935884-3349723552ca" /></FlexItem
    ><FlexItem>Hi</FlexItem></FlexBox
  >
</template>

<script lang="ts">
import FlexBox from "./layout/FlexBox.vue";
import FlexItem from "./layout/FlexItem.vue";
import ImgContainer from "./components/ImgContainer.vue";

export default {
  components: { FlexBox, FlexItem, ImgContainer },
};
</script>

<style></style>
