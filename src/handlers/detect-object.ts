import { Ref } from "vue";

require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default async function detectObjectHandler(
  imgRef: Ref<any>,
  prediction: Ref<{ class: string }[]>
) {
  const img = imgRef.value;
  const model = await cocoSsd.load();
  const predictions = await model.detect(img);
  prediction.value = predictions;

}
