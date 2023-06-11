# VSForm

 The Form component is a customizable form wrapper in Vue.js. It renders a form element with a dynamic class based on the type prop, allowing for different background colors and styles. The component offers five predefined color variations, creating a blue color palette, and sets the text color to white for all variations.

## Props

| Prop  | Description                               | Type   | Default     |              Accepted Values                |
| :---- | :---------------------------------------- | :----- | :---------- | :------------------------------------------ | 
| type  | The type of the form (CSS class)          | String | `'primary'` | `'light'`, `'dark'`, `'blue1'` or `'blue2'` |

## Example

```vue
<VSForm type="primary">
  </VSForm>

  <VSForm type="light">
  </VSForm>

  <VSForm type="dark">
  </VSForm>

  <VSForm type="blue1">
  </VSForm>

  <VSForm type="blue2">
  </VSForm>
```

<FormExample />

<script setup>
import FormExample from './FormExample.vue'
</script>