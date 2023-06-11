<template>
    <select class="select" :class="[type, { 'outline': isOutline, 'underlined': isUnderlined }]" @change="$emit('change', $event.target.value)">
      <slot></slot>
    </select>
  </template>
  
  <script>
  export default {
    name: 'VSSelect',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      isOutline: {
        type: Boolean,
        default: false
      },
      isUnderlined: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .select {
    /* Common select styles */
    padding: 10px;
    border: none;
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
  
  /* Override select text color */
  .primary,
  .light,
  .dark,
  .blue1,
  .blue2 {
    color: #fff;
  }
  
  /* Outline style */
  .outline {
    border: 2px solid #a0baff;
  }
  
  /* Underlined style */
  .underlined {
    border-bottom: 2px solid #fff;
  }
  </style>
  