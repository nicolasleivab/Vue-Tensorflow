<template>
    <footer class="footerText">
      <p>{{`Copyright © Nicolás Leiva Büchi ${new Date().getFullYear()}.`}}</p>
</footer>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({});
  </script>
  
  <style>
  .footerText {
    font-size: 14px;
  }
  </style>
