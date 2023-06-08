<template>
    <form :class="['form', type]">
      <slot></slot>
    </form>
  </template>
  
  <script>
  export default {
    name: 'VSForm',
    props: {
      type: {
        type: String,
        default: 'primary'
      }
    }
  }
  </script>
  
  <style scoped>
  .form {
    /* Custom form styles */
    margin: 20px;
    padding: 20px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  
  /* Blue color palette */
  .primary {
    background-color: #007bff;
    /* Default blue */
  }
  
  .light {
    background-color: #57abfa;
    /* Light blue */
  }
  
  .dark {
    background-color: #192e42;
    /* Dark blue */
  }
  
  .blue1 {
    background-color: #cce0ff;
    /* Lighter blue */
  }
  
  .blue2 {
    background-color: #4d88ff;
    /* Darker blue */
  }
  
  /* Override button text color */
  .primary,
  .light,
  .dark,
  .blue1,
  .blue2 {
    color: #fff;
  }
  </style>
  