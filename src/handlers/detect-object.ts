import { TAlertValue } from "@/types";
import { getErrorMessage } from "@/utils/handle-error";
import { Ref } from "vue";

require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default async function detectObjectHandler(
  imgRef: Ref<HTMLImageElement | null>,
  prediction: Ref<{ class: string }[]>,
  alertValue: Ref<TAlertValue>
) {
  try {
    const img = imgRef.value;
    const model = await cocoSsd.load();
    const predictions = await model.detect(img);
    prediction.value = predictions;
  } catch (error) {
    const errorMsg = getErrorMessage(error);
    alertValue.value = { type: "error", msg: errorMsg };
  }
}
