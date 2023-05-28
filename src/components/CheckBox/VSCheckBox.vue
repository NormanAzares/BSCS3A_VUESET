<template>
    <div>
      <label :class="['checkbox', { 'checkbox--blue': isBlue }]" @click="toggleCheckbox">
        <input type="checkbox" v-model="isChecked" :disabled="isDisabled" />
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
        isChecked: false
      };
    },
    methods: {
      toggleCheckbox() {
        if (!this.isDisabled) {
          this.isChecked = !this.isChecked;
        }
      }
    }
  };
  </script>
  
  <style>
  .checkbox {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .checkbox--blue {
    color: blue;
  }
  
  .checkbox input {
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
    border-radius: 3px;
  }
  
  .checkbox--blue .checkmark {
    background-color: blue;
  }
  
  .checkbox input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .checkbox input:checked ~ .checkmark:after {
    display: block;
  }
  
  .checkbox .checkmark:after {
    left: 5px;
    top: 1px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  </style>
  