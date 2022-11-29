<template>
  <button :class="btnStyle === 'primary' ? 'primaryButton' : 'secondaryButton'">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type TButtonType = "primary" | "secondary";

export default defineComponent({
  props: {
    btnType: String as PropType<TButtonType>,
  },

  setup(props) {
    return {
      btnStyle: props.btnType,
    };
  },
});
</script>

<style>
.primaryButton {
  cursor: pointer;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
}

.secondaryButton {
  cursor: pointer;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  background-color: #7fffd4;
}
</style>
