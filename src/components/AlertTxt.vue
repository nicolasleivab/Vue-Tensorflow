<template>
  <alert :class="alertStyle === 'warning' ? 'warningAlert' : 'errorAlert'"
    ><slot></slot
  ></alert>
</template>

<script lang="ts">
import { TAlertType } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    alertType: String as PropType<TAlertType>,
  },

  setup(props) {
    return {
      alertStyle: props.alertType,
    };
  },
});
</script>

<style>
.errorAlert {
  font-size: 14px;
  padding: 5px;
  background-color: red;
  border-radius: 5px;
}

.warningAlert {
  font-size: 14px;
  padding: 5px;
  background-color: yellow;
  border-radius: 5px;
}
</style>
