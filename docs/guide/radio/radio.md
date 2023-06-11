# VSRadioBox

Radio

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
```

<RadioExample />

<script setup>
import RadioExample from './RadioExample.vue'
</script>
