# VSInput

The Input component is a reusable input field component designed for use in Vue.js applications. It provides a customizable input field with a corresponding label. The component accepts several props to configure its appearance and behavior, such as the initial input value, label, placeholder, name, required status, and disabled state.

The input field has a responsive design and adjusts its height and width to fit its container. It includes various visual cues and transitions, such as border color changes and label animations, to enhance the user experience. The component also supports keyboard accessibility by allowing users to focus on the input field by clicking on its associated label.

The input field's value is bound to the modelValue prop, allowing two-way data binding with the parent component. When the input value changes, the component emits an update:modelValue event, enabling you to synchronize the value with the parent component.

## Props

| Prop          | Description                                   | Accepted Values   | Default     |
| :------------ | :-------------------------------------------- | :---------------- | :---------- |
| `modelValue`  | A variable for you to hook into using v-model | -                 | `undefined` |
| `label`       | The input's label                             | -                 | `undefined` |
| `placeholder` | The input's placeholder                       | -                 | `undefined` |
| `name`        | The input's HTML name (useful for forms)      | -                 | `undefined` |
| `required`    | HTML's required attribute                     | `true` or `false` | `false`     |
| `disabled`    | HTML's disabled attribute                     | `true` or `false` | `false`     |

| Event               | Description                     | Parameters                |
| :------------------ | :------------------------------ | :------------------------ |
| `update:modelValue` | Triggered on native input event | `newValue`: Text on input |

## Examples
```vue

<p>Default</p>
<VSInput />

<p>Example with label - {{ labelText }}</p>
<VSInput label="Example text" v-model="labelText" />


<p>Example with placeholder - {{ placeholderLabelText }}</p>
<VSInput placeholder="Write something here" v-model="placeholderLabelText" />


<p>Example without label - {{ noLabelText }}</p>
<VSInput v-model="noLabelText" />


<p>Example with required - {{ requiredText }}</p>
<VSInput label="I am required" v-model="requiredText" required />


<p>Disabled</p>
<VSInput label="Oh :(" disabled />

<p>Disabled with a label</p>
<VSInput label="Oh :(" modelValue="Hello" disabled />  

```

<InputExample />

<script setup>
import InputExample from './InputExample.vue'
</script>
