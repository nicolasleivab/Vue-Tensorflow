import { Ref } from "vue";

export default async function startVideo(isStreaming: Ref<boolean>, videoRef: Ref<any>) {
    if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((device) => device.kind === "videoinput");
        const camId = cams[0].deviceId;
        const video = cams.length === 1 ? true : { deviceId: { exact: camId } };
        navigator.mediaDevices.getUserMedia({ video: video }).then((stream) => {
          isStreaming.value = true;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          videoRef!.value!.srcObject = stream;
        });
      }
}
