<template>
  <div style="margin-bottom: 16px">
    <p>State: {{ state }}</p>
    <VSSwitch label="Switch" v-model="state" />
  </div>
  <div style="margin-bottom: 16px">
    <VSSwitch label="Unchecked disabled" :modelValue="false" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <VSSwitch label="Checked disabled" :modelValue="true" disabled />
  </div>
</template>
<script>
import { VSSwitch } from '../../../src/components/index'

export default {
  name: 'SwitchExample',
  components: {
    VSSwitch,
  },
  data() {
    return {
      state: false,
    }
  },
}
</script>
