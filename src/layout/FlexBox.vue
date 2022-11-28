<template>
  <div className="flexBox"><slot></slot></div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.flexBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
