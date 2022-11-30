import { mount } from "@vue/test-utils";
import ResultsDisplay from "../ResultsDisplay.vue";

const MSG = "person";
const Results = {
  template: `<ResultsDisplay>${MSG}<ResultsDisplay/>`,
  components: { ResultsDisplay },
};

describe("ResultsDisplay.vue", () => {
  it("renders results when passed as children", () => {
    const wrapper = mount(Results);

    expect(wrapper.text()).toMatch(MSG);
  });
});
