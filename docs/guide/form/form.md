# VSForm

A customizable form component

## Props

| Prop  | Description                               | Type   | Default     |              Accepted Values                |
| :---- | :---------------------------------------- | :----- | :---------- | :------------------------------------------ | 
| type  | The type of the form (CSS class)          | String | `'primary'` | `'light'`, `'dark'`, `'blue1'` or `'blue2'` |

## Example

```vue
Default Primary
<VSForm type="primary"/>
 Light 
<VSForm type="light"/>
 Dark 
<VSForm type="dark"/>
 Blue1
<VSForm type="blue1"/>
 Blue2
<VSForm type="blue2"/>

```

<FormExample />

<script setup>
import FormExample from './FormExample.vue'
</script>