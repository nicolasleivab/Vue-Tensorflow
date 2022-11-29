<template>
  <div class="flexBox"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
type TFlexDirection = "row" | "column";

export default defineComponent({
  props: {
    flexDirection: String as PropType<TFlexDirection>,
  },

  setup(props) {
    return {
      urlStr: props.flexDirection,
    };
  },
});
</script>

<style>
.flexBox {
  display: flex;
  flex-direction: v-bind(flexDirection);
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
