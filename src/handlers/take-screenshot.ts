import { Ref } from "vue";

const VIDEO_WIDTH = 300;
const VIDEO_HEIGHT = 150;

export default function takeScreenShotHandler(
  imgRef: Ref<HTMLVideoElement | any>,
  videoRef: Ref<HTMLVideoElement | any>
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(videoRef.value, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
  const data = canvas.toDataURL("image/png");

  imgRef.value.setAttribute("src", data);
}
