# VSRadioBox

It provides a selectable option within a group of radio buttons. The component allows users to choose a single option by clicking on the radio button or its label. It supports essential features such as a customizable label, disabled state, and the ability to assign a specific value to each radio button. 



```js
const items = [
  {
    label: 'Label 1',
    value: 'value1',
  },
  {
    label: 'Label 2',
    value: 'value2',
  },
]
```

```vue
<p>{{ selectedValue }}</p>
<VSRadioBox name="example" :items="items" v-model="selectedValue" />

 
<p>Here is an example of a disabled radio group</p>
<VSRadioBox name="disabled-example" :items="items" v-model="selectedValue" disabled />
  
```

<RadioExample />

<script setup>
import RadioExample from './RadioExample.vue'
</script>
