import { mount } from "@vue/test-utils";
import FlexBox from "../FlexBox.vue";

const Results = {
  template: `<FlexBox flex-direction='column'><p>1</p><p>2</p><FlexBox/>`,
  components: { FlexBox },
};

describe("FlexBox.vue", () => {
  it("renders a flex box div with flexBox class", () => {
    const wrapper = mount(Results);

    expect(wrapper.attributes()).toStrictEqual({ class: "flexBox" });
  });
});
