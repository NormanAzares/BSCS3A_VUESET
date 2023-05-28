<template>
    <div>
      <label :class="['radio', { 'radio--blue': isBlue }]">
        <input type="radio" :name="name" :value="value" v-model="selectedValue" :disabled="isDisabled" />
        <span class="checkmark"></span>
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      isBlue: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selectedValue: ''
      };
    }
  };
  </script>
  
  <style>
  .radio {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .radio--blue {
    color: blue;
  }
  
  .radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  .radio--blue .checkmark {
    background-color: blue;
  }
  
  .radio input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .radio input:checked ~ .checkmark:after {
    display: block;
  }
  
  .radio .checkmark:after {
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
  
  </style>
  