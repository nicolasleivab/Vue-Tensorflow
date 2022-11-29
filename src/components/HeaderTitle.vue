<template>
  <header class="headerTitle">
    <h1><slot></slot></h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.headerTitle {
  font-size: 17px;
}
</style>
