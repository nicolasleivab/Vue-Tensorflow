<template>
  <div class="cardFrame"><slot></slot></div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.cardFrame {
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 3px 2px 5px #999;
}
</style>
