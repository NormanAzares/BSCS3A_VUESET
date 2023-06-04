<template>
    <div class="dividers">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dividers'
  }
  </script>
  
  <style scoped>
  .dividers {
    /* Custom divider styles */
    border-top: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px 0;
  }
  </style>