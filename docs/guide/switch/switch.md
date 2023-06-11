# VSSwitch
This component is a switch toggle or checkbox that can be used in a user interface. It allows the user to toggle between two states, typically representing an on/off or true/false condition.

The switch is implemented as a Vue.js component and consists of a label, an input element representing the checkbox, and a slider element that moves to indicate the current state. The appearance of the switch changes dynamically based on its state and disabled status.

## Props

| Prop         | Description                                   | Accepted Values   | Default     |
| :----------- | :-------------------------------------------- | :---------------- | :---------- |
| `modelValue` | A variable for you to hook into using v-model | -                 | `undefined` |
| `label`      | The switch's label                            | -                 | `undefined` |
| `disabled`   | HTML's disabled attribute                     | `true` or `false` | `false`     |

| Event               | Description                      | Parameters               |
| :------------------ | :------------------------------- | :----------------------- |
| `update:modelValue` | Triggered on switch state change | `newValue`: Switch state |

The switch provides you with a different kind of checkbox

## Examples 
```vue
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
```

<SwitchExample />

<script setup>
import SwitchExample from './SwitchExample.vue'
</script>
