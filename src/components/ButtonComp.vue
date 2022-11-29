<template>
  <button className="buttonComp"><slot></slot></button>
</template>

<script lang="ts">
export default {};
</script>

<style>
.buttonComp {
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  background-color: #eee;
}
</style>
