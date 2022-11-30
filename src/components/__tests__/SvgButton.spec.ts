import { mount } from "@vue/test-utils";
import SvgButton from "../StyledButton.vue";

const UpdateButton = {
  template: `
      <div>
        <SvgButton id='mybtn' @click="clicked = true" />
        <p>{{ clicked ? 'clicked' : 'unclicked' }}</p>
      </div>
    `,
  components: {
    SvgButton,
  },
  data() {
    return { clicked: false };
  },
};

describe("SvgButton.vue", () => {
  test("changes clicked state to true", async () => {
    const wrapper = mount(UpdateButton);
    const button = wrapper.find("button");
    const text = wrapper.find("p");

    expect(text.text()).toContain("unclicked");

    await button.trigger("click");

    expect(text.text()).toContain("clicked");
  });
});
