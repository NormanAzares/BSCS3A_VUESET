
<template>
    <div :style="dividerStyle"></div>
  </template>
  
  <script>
  export default {
    name: 'VSDividers',
    props: {
      color: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      dividerStyle() {
        return {
          height: '1px',
          backgroundColor: this.getColor(),
          opacity: 1,
          margin: '10px 0'
        };
      }
    },
    methods: {
      getColor() {
        switch (this.color) {
          case 'primary':
            return '#007bff'; /* Default blue */
          case 'light':
            return '#57abfa'; /* Light blue */
          case 'dark':
            return '#192e42'; /* Dark blue */
          case 'blue1':
            return '#cce0ff'; /* Lighter blue */
          case 'blue2':
            return '#4d88ff'; /* Darker blue */
          default:
            return '#007bff'; /* Default blue */
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* No additional styles needed */
  </style>
  