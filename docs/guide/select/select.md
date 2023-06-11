# VSSelect

The Select component is a customizable Vue component that provides an enhanced dropdown input for selecting options. It supports various features such as customizable options, two display modes, a selected value state, disabled state, event handling, and the ability to apply custom styling.

## Props

| Prop         | Description                                        | Type    | Default     |             Accepted Values                |
| :----------- | :------------------------------------------------- | :------ | :------     | :----------------------------------------- | 
| type         | The type of the select (CSS class)                 | String  | `'primary'` | `'light'`, `'dark'`, `'blue1'` or `'blue2'`|
| isOutline    | Determines if the select has an outline style      | Boolean | `false`     |             `isOutline`                    |
| isUnderlined | Determines if the select has an underlined style   | Boolean | `false`     |             `isUnderlined`                 |

## Example

```vue
<VSSelect type="primary" isOutline>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
</VSSelect>

<VSSelect type="light">
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
</VSSelect>

<VSSelect type="dark" isOutline>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
</VSSelect>

<VSSelect type="blue1" isOutline>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
</VSSelect>

<VSSelect type="blue2" isOutline>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
</VSSelect>
```

<SelectExample />

<script setup>
import SelectExample from './SelectExample.vue'
</script>