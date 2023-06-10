<template>
  <div style="margin-bottom: 16px">
    <p>Default</p>
    <VSInput />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with label - {{ labelText }}</p>
    <VSInput label="Example text" v-model="labelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with placeholder - {{ placeholderLabelText }}</p>
    <VSInput placeholder="Write something here" v-model="placeholderLabelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example without label - {{ noLabelText }}</p>
    <VSInput v-model="noLabelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with required - {{ requiredText }}</p>
    <VSInput label="I am required" v-model="requiredText" required />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled</p>
    <VSInput label="Oh :(" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled with a label</p>
    <VSInput label="Oh :(" modelValue="Hello" disabled />
  </div>
</template>
<script>
import { VSInput } from '../../../src/components/index'

export default {
  name: 'InputExample',
  components: {
    VSInput,
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
