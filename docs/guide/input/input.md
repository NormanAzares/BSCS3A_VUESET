# Input

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
