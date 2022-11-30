import { TAlertValue } from "@/types";
import { getErrorMessage } from "@/utils/handle-error";
import { Ref } from "vue";

export default async function startVideoHandler(
  isStreaming: Ref<boolean>,
  videoRef: Ref<HTMLVideoElement | null>,
  alertValue: Ref<TAlertValue>
) {
  if (navigator.mediaDevices.getUserMedia) {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter((device) => device.kind === "videoinput");
      const camId = cams[0].deviceId;
      const video = cams.length === 1 ? true : { deviceId: { exact: camId } };
      navigator.mediaDevices.getUserMedia({ video: video }).then((stream) => {
        isStreaming.value = true;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        videoRef!.value!.srcObject = stream;
      });
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      alertValue.value = { type: "error", msg: errorMsg };
    }
  }
}
