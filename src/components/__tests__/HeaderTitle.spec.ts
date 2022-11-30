import { mount } from "@vue/test-utils";
import HeaderTitle from "../HeaderTitle.vue";

const MSG = "new message";
const Header = {
  template: `<HeaderTitle>${MSG}<HeaderTitle/>`,
  components: { HeaderTitle },
};

describe("HeaderTitle.vue", () => {
  it("renders children nodes when passed", () => {
    const wrapper = mount(Header);

    expect(wrapper.text()).toMatch(MSG);
  });
});
