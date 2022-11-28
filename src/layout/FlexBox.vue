<template>
    <div className="flexBox"><slot></slot></div>
</template>
  
  <script lang="ts">
  //import { Node } from "@vue/compiler-core";

 export default {

  //  setup(props: {children: Node}) {      
      
     // return {
        //children: props.children
      //};
    //},
  };
  </script>
  
  <style>
  .flexBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>
