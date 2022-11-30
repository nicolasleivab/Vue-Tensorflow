import { mount } from "@vue/test-utils";
import StyledButton from "../StyledButton.vue";

const Counter = {
  template: `
      <div>
        <StyledButton id='mybtn' @click="count++">Add up</StyledButton>
        <p>Total clicks: {{ count }}</p>
      </div>
    `,
  components: {
    StyledButton,
  },
  data() {
    return { count: 0 };
  },
};

describe("StyledButton.vue", () => {
  test("increments counter value on click", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("button");
    const text = wrapper.find("p");

    expect(text.text()).toContain("Total clicks: 0");

    await button.trigger("click");

    expect(text.text()).toContain("Total clicks: 1");
  });
});
