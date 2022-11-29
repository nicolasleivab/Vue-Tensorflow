<template>
  <FlexBox flexDirection="column">
    <FlexItem>
      <ButtonComp v-if="!isStreaming" @click="startVideo">Start Video</ButtonComp>
      <ButtonComp v-else @click="stopVideo">Stop Video</ButtonComp>
    </FlexItem>
    <FlexItem>
      <CardFrame>
        <ImgContainer
          url="https://images.unsplash.com/photo-1567581935884-3349723552ca" />
      </CardFrame>
    </FlexItem>
    <FlexItem>
      <CardFrame>
          <video ref="videoRef" width="400" autoplay="true" />
      </CardFrame>
    </FlexItem>
  </FlexBox>
</template>

<script lang="ts">
import FlexBox from "./layout/FlexBox.vue";
import FlexItem from "./layout/FlexItem.vue";
import CardFrame from "./layout/CardFrame.vue";
import ImgContainer from "./components/ImgContainer.vue";
import ButtonComp from "./components/ButtonComp.vue";
import startVideoHandler from './handlers/start-video';
import { ref } from "vue";

export default {
  components: { FlexBox, FlexItem, ImgContainer, CardFrame, ButtonComp },

  setup() {
    const videoRef = ref<any>("");
    const isStreaming = ref<boolean>(false);

    async function startVideo(){
      startVideoHandler(isStreaming, videoRef);
    }

    function stopVideo() {
      console.log(videoRef)
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map((track: any) => track.stop());
      isStreaming.value = false;
    }

    return {
      startVideo,
      stopVideo,
      videoRef,
      isStreaming,
    };
  },
};
</script>

<style></style>
