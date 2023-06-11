<template>
  <div style="margin-bottom: 16px">
    <p>Selected value: {{ selectedValue }}</p>
    <VSRadioBox name="example" :items="items" v-model="selectedValue" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Here is an example of a disabled radio group</p>
    <VSRadioBox
      name="disabled-example"
      :items="items"
      v-model="selectedValue"
      disabled
    />
  </div>
</template>
<script>
import { VSRadioBox } from '../../../src/components/index'

export default {
  name: 'RadioExample',
  components: {
    VSRadioBox,
  },
  data() {
    return {
      items: [
        {
          label: 'Label 1',
          value: 'value1',
        },
        {
          label: 'Label 2',
          value: 'value2',
        },
      ],
      selectedValue: 'value1',
    }
  },
}
</script>
