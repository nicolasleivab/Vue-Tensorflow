import { TMediaTrack } from "@/types";
import { Ref } from "vue";

export default function stopVideoHandler(
  isStreaming: Ref<boolean>,
  videoRef: Ref<any>
) {
  const stream = videoRef.value.srcObject;
  const tracks = stream.getTracks();
  tracks.map((track: TMediaTrack) => track.stop());
  isStreaming.value = false;
}
