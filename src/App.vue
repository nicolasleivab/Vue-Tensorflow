<template>
  <FlexBox flexDirection="column">
    <FlexItem>
      <ButtonComp @click="myMethod">Start Video</ButtonComp>
    </FlexItem>
    <FlexItem>
      <CardFrame>
        <ImgContainer
          url="https://images.unsplash.com/photo-1567581935884-3349723552ca" />
      </CardFrame>
    </FlexItem
  ></FlexBox>
</template>

<script lang="ts">
import FlexBox from "./layout/FlexBox.vue";
import FlexItem from "./layout/FlexItem.vue";
import CardFrame from "./layout/CardFrame.vue";
import ImgContainer from "./components/ImgContainer.vue";
import ButtonComp from "./components/ButtonComp.vue";

export default {
  components: { FlexBox, FlexItem, ImgContainer, CardFrame, ButtonComp },

  setup() {
    function alertUser() {
      alert("This is an alert");
    }

    return {
      myMethod: alertUser,
    };
  },
};
</script>

<style></style>
