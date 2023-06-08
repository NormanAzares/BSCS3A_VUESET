<template>
  <div style="margin-bottom: 16px;">Examples</div>
  <div style="margin-bottom: 16px">
    <p>Default</p>
    <VSCheckBox />
  </div>
  <div style="margin-bottom: 16px">
    <p>State: {{ state }}</p>
    <VSCheckBox label="Checkbox" v-model="state" />
  </div>
  <div style="margin-bottom: 16px">
    <VSCheckBox label="Unchecked disabled" :modelValue="false" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <VSCheckBox label="Checked disabled" :modelValue="true" disabled />
  </div>
</template>
<script>
import { VSCheckBox } from '../../../src/components/index'

export default {
  name: 'CheckboxExample',
  components: {
    VSCheckBox,
  },
  data() {
    return {
      state: true,
    }
  },
}
</script>
