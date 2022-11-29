<template>
  <FlexBox flexDirection="column">
    <FlexItem><HeaderTitle>Vue Detect Object App</HeaderTitle></FlexItem>
    <FlexItem v-if="!isStreaming">
      <StyledButton btnType="primary" @click="startVideo"
        >Start Video</StyledButton
      >
    </FlexItem>
    <FlexItem v-else>
      <StyledButton btnType="secondary" @click="stopVideo"
        >Stop Video</StyledButton
      >
    </FlexItem>
    <FlexItem>
      <CardFrame>
        <FlexBox flexDirection="column">
          <FlexItem>
            <video ref="videoRef" width="400" autoplay="true" />
          </FlexItem>
          <FlexItem>
            <SvgButton v-if="isStreaming" @click="takeScreenShot" />
          </FlexItem>
        </FlexBox>
      </CardFrame>
    </FlexItem>
    <FlexItem v-if="isStreaming">
      <CardFrame>
        <img
          alt="snapshot goes here"
          ref="imgRef"
          width="400"
          height="300"
          crossorigin="anonymous"
        />
      </CardFrame>
    </FlexItem>
  </FlexBox>
</template>

<script lang="ts">
import FlexBox from "./layout/FlexBox.vue";
import FlexItem from "./layout/FlexItem.vue";
import CardFrame from "./layout/CardFrame.vue";
import StyledButton from "./components/StyledButton.vue";
import SvgButton from "./components/SvgButton.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import {
  startVideoHandler,
  stopVideoHandler,
  takeScreenShotHandler,
} from "./handlers";
import { ref } from "vue";

export default {
  components: {
    HeaderTitle,
    FlexBox,
    FlexItem,
    CardFrame,
    StyledButton,
    SvgButton,
  },

  setup() {
    const videoRef = ref<any>("");
    const imgRef = ref<any>("");
    const isStreaming = ref<boolean>(false);

    async function startVideo() {
      startVideoHandler(isStreaming, videoRef);
    }

    function stopVideo() {
      stopVideoHandler(isStreaming, videoRef);
    }

    function takeScreenShot() {
      takeScreenShotHandler(imgRef, videoRef);
    }

    return {
      startVideo,
      stopVideo,
      takeScreenShot,
      videoRef,
      imgRef,
      isStreaming,
    };
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto Mono";
  src: local("Roboto Mono"),
    url(./fonts/RobotoMono-VariableFont_wght.ttf) format("truetype");
}
body,
button {
  font-family: "Roboto Mono", Helvetica, Arial;
  font-size: 15px;
}
</style>
