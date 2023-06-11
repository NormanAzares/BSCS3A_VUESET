# VSCheckbox

A customizable accessible checkbox

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
