<template>
  <div class="switch" :class="{ on: value }" @click="toggleSwitch">
    <div class="handle"></div>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSwitch() {
      this.$emit('input', !this.value);
    }
  }
}
</script>

<style scoped>
.switch {
  width: 60px;
  height: 30px;
  background-color: #dcdcdc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.switch.on {
  background-color: #4caf50;
}

.handle {
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: left 0.3s;
}

.switch.on .handle {
  left: calc(100% - 27px);
}
</style>