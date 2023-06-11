# VSTextArea

The TextArea component is a versatile component that enhances the functionality of text input areas. It offers a customizable and user-friendly interface for capturing and displaying multi-line text input. The component supports features such as auto-growing to accommodate the content, resizable options, label display, placeholder text, validation, and disabled state.

## Props

| Prop          | Description                                   | Accepted Values                               | Default     |
| :------------ | :-------------------------------------------- | :-------------------------------------------- | :---------- |
| `modelValue`  | A variable for you to hook into using v-model | -                                             | `undefined` |
| `label`       | The textarea's label                          | -                                             | `undefined` |
| `placeholder` | The textarea's placeholder                    | -                                             | `undefined` |
| `name`        | The textarea's HTML name (useful for forms)   | -                                             | `undefined` |
| `required`    | HTML's required attribute                     | `true` or `false`                             | `false`     |
| `disabled`    | HTML's disabled attribute                     | `true` or `false`                             | `false`     |
| `resize`      | Textarea's resize attribute                   | `default`, `vertical`, `horizontal` or `none` | `false`     |

| Event               | Description                     | Parameters                   |
| :------------------ | :------------------------------ | :--------------------------- |
| `update:modelValue` | Triggered on native input event | `newValue`: Text on textarea |

## Examples
```vue
    <div style="margin-bottom: 16px">
    <p>Default</p>
    <VSTextArea />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with label - {{ labelText }}</p>
    <VSTextArea label="Example text" v-model="labelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with placeholder - {{ placeholderLabelText }}</p>
    <VSTextArea
      placeholder="Write something here"
      v-model="placeholderLabelText"
    />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example without label - {{ noLabelText }}</p>
    <VSTextArea v-model="noLabelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with required - {{ requiredText }}</p>
    <VSTextArea label="I am required" v-model="requiredText" required />
  </div>
  <div style="margin-bottom: 16px">
    <p>Resize Vertical</p>
    <VSTextArea label="<Drag up and down >" resize="vertical" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Resize Horizontal</p>
    <VSTextArea label="<Drag left and right>" resize="horizontal" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Resize None</p>
    <VSTextArea label="<Not resizable>" resize="none" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Autogrow</p>
    <VSTextArea label="Autogrow" autogrow />
  </div>
  <div style="margin-bottom: 16px">
    <p>Autogrow no label</p>
    <VSTextArea autogrow />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled</p>
    <VSTextArea  disabled />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled with a label</p>
    <VSTextArea label="Oh :(" disabled />
  </div>
  
```

<TextAreaExample />

<script setup>
import TextAreaExample from './TextareaExample.vue'
</script>
