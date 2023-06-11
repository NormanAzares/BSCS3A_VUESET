<template>
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
    <VSTextArea label="Resize vertical" resize="vertical" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Resize Horizontal</p>
    <VSTextArea label="Resize horizontal" resize="horizontal" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Resize None</p>
    <VSTextArea label="Resize none" resize="none" />
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
    <VSTextArea label="Oh :(" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled with a label</p>
    <VSTextArea
      label="Oh :("
      modelValue="Resize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontalResize horizontal"
      disabled
    />
  </div>
</template>
<script>
import { VSTextArea } from '../../../src/components/index'

export default {
  name: 'TextAreaExample',
  components: {
    VSTextArea,
  },
  data() {
    return {
      labelText: '',
      placeholderLabelText: '',
      noLabelText: '',
      requiredText: '',
    }
  },
}
</script>
