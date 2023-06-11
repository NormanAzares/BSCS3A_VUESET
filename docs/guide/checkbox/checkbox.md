# VSCheckbox

Users can toggle the checkbox by clicking it or using the spacebar/enter key. It supports a disabled state and allows controlling the checkbox state using the "modelValue" prop. You can provide a label for the checkbox. When the checkbox state changes, it emits an event to update the parent component. 


## Props

| Prop         | Description                                   | Accepted Values   | Default     |
| :----------- | :-------------------------------------------- | :---------------- | :---------- |
| `modelValue` | A variable for you to hook into using v-model | -                 | `undefined` |
| `label`      | The checkbox's label                          | -                 | `undefined` |
| `disabled`   | HTML's disabled attribute                     | `true` or `false` | `false`     |

| Event               | Description                       | Parameters                |
| :------------------ | :-------------------------------- | :------------------------ |
| `update:modelValue` | Triggered on checked state change | `newValue`: Checked state |

## Examples
```vue
<p>State: {{ state }}</p>
<VSCheckBox label="Checkbox" v-model="state" />
```

<CheckboxExample />

<script setup>
import CheckboxExample from './CheckboxExample.vue'
</script>
