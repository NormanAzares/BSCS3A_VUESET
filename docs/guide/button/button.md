# VSButton

The VSButton component is a reusable button component designed for use in Vue.js applications. It provides a customizable button with different styles, including default, outlined, and text. The component accepts several props to configure its appearance and behavior, such as the button label, title, type, and disabled state.

## Props

| Prop       | Description               | Accepted Values                 | Default     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `label`    | The button's text         | -                               | `undefined` |
| `title`    | HTML title attribute      | -                               | `undefined` |
| `type`     | Visual type of button     | `default`, `outlined` or `text` | `default`   |
| `disabled` | HTML's disabled attribute | `true` or `false`               | `false`     |

| Event   | Description               | Parameters    |
| :------ | :------------------------ | :------------ |
| `click` | Triggered on button click | `$clickEvent` |

## Examples
```vue
<div style="margin-bottom: 16px">
  <VSButton label="Default" />
</div>
<div style="margin-bottom: 16px">
  <VSButton label="Outlined" type="outlined" />
</div>
<div style="margin-bottom: 16px">
  <VSButton label="Text" type="text" />
</div>
<div>
  <VSButton label="Disabled" type="text" disabled />
</div>
```
<ButtonExample />

<script setup>
import ButtonExample from './ButtonExample.vue'
</script>
