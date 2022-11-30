<template>
  <FlexBox flex-direction="column">
    <FlexItem><HeaderTitle>Vue Object Detection App</HeaderTitle></FlexItem>
    <FlexItem v-if="alertValue.msg !== ''"
      ><AlertTxt :alert-type="alertValue.type">{{
        alertValue.msg
      }}</AlertTxt></FlexItem
    >
    <FlexItem>
      <CardFrame>
        <FlexBox flex-direction="column">
          <FlexItem>
            <video ref="videoRef" autoplay="true" />
          </FlexItem>
          <FlexBox flex-direction="row">
            <FlexItem v-if="!isStreaming">
              <StyledButton btn-type="primary" @click="startVideo"
                >Start Video</StyledButton
              >
            </FlexItem>
            <FlexItem v-else>
              <StyledButton btn-type="secondary" @click="stopVideo"
                >Stop Video</StyledButton
              >
            </FlexItem>
            <FlexItem>
              <SvgButton @click="takeScreenShot" />
            </FlexItem>
          </FlexBox>
        </FlexBox>
      </CardFrame>
    </FlexItem>
    <FlexItem>
      <StyledButton btn-type="primary" @click="detectObject"
        >Detect Object</StyledButton
      >
    </FlexItem>
    <FlexItem v-if="isLoading">
      <ResultsDisplay>Image classification in process...</ResultsDisplay>
    </FlexItem>
    <FlexItem v-if="prediction.length > 0 && !isLoading">
      <ResultsDisplay>{{
        `Object detected: ${prediction[0].class}`
      }}</ResultsDisplay>
    </FlexItem>
    <FlexItem>
      <CardFrame>
        <img alt="snapshot goes here" ref="imgRef" crossorigin="anonymous" />
      </CardFrame>
    </FlexItem>
    <FooterText />
  </FlexBox>
</template>

<script lang="ts">
import FlexBox from "./layout/FlexBox.vue";
import FlexItem from "./layout/FlexItem.vue";
import CardFrame from "./layout/CardFrame.vue";
import StyledButton from "./components/StyledButton.vue";
import SvgButton from "./components/SvgButton.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import ResultsDisplay from "./components/ResultsDisplay.vue";
import AlertTxt from "./components/AlertTxt.vue";
import FooterText from "./components/FooterText.vue";
import {
  startVideoHandler,
  stopVideoHandler,
  takeScreenShotHandler,
  detectObjectHandler,
} from "./handlers";
import { ref } from "vue";
import { TAlertValue } from "./types";

export default {
  components: {
    HeaderTitle,
    FlexBox,
    FlexItem,
    CardFrame,
    StyledButton,
    SvgButton,
    ResultsDisplay,
    FooterText,
    AlertTxt,
  },

  setup() {
    const videoRef = ref<HTMLVideoElement | null>(null);
    const imgRef = ref<HTMLImageElement | null>(null);
    const isStreaming = ref<boolean>(false);
    const prediction = ref<{ class: string }[]>([]);
    const isLoading = ref<boolean>(false);
    const alertValue = ref<TAlertValue>({ type: "warning", msg: "" });
    const alertTimeout = ref<ReturnType<typeof setTimeout> | null>(null);

    function clearAlert() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clearTimeout(alertTimeout.value!);
      alertTimeout.value = setTimeout(
        () => (alertValue.value = { type: "warning", msg: "" }),
        3000
      );
    }

    async function startVideo() {
      await startVideoHandler(isStreaming, videoRef, alertValue);
    }

    function stopVideo() {
      stopVideoHandler(isStreaming, videoRef);
    }

    function takeScreenShot() {
      if (!isStreaming.value) {
        alertValue.value = {
          type: "warning",
          msg: "Please start the video first.",
        };
        return clearAlert();
      }
      takeScreenShotHandler(imgRef, videoRef);
    }

    async function detectObject() {
      if (imgRef.value && !imgRef.value.src) {
        alertValue.value = {
          type: "warning",
          msg: "Please take a snapshot first.",
        };
        return clearAlert();
      }
      isLoading.value = true;
      await detectObjectHandler(imgRef, prediction, alertValue);
      isLoading.value = false;
    }

    return {
      startVideo,
      stopVideo,
      takeScreenShot,
      detectObject,
      videoRef,
      imgRef,
      isStreaming,
      prediction,
      isLoading,
      alertValue,
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

img,
video {
  width: 400px;
  height: 300px;
}
@media (max-width: 576px) {
  img,
  video {
    max-width: 95%;
    height: 200px;
  }
}
</style>
