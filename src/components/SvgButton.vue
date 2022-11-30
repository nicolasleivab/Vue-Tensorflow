s
<template>
  <button class="svgButton" title="Take a snapshot">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <!-- svg path adapted from https://fontawesomeicons.com/svg/icons/camera -->
      <path
        fill="#555"
        d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
      />
      <path
        fill="#555"
        d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
export default {};
</script>

<style>
.svgButton {
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #eee;
  box-shadow: 2px 1px 2px 2px #999;
}

.svgButton:active {
  box-shadow: none;
}
</style>
