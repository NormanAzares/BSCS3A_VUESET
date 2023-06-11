<template>
  <!--  -->
  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Default</p>
    <VSTextArea />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Example with label - {{ labelText }}</p>
    <VSTextArea label="Example text" v-model="labelText" />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Example with placeholder - {{ placeholderLabelText }}</p>
    <VSTextArea
      placeholder="Write something here"
      v-model="placeholderLabelText"
    />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Example without label - {{ noLabelText }}</p>
    <VSTextArea v-model="noLabelText" />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Example with required - {{ requiredText }}</p>
    <VSTextArea label="I am required" v-model="requiredText" required />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Resize Vertical</p>
    <VSTextArea label="<Drag up and down >" resize="vertical" />
  </div>

  <br>
  <br>
 
  <div style="margin-bottom: 16px">
    <p>Resize Horizontal</p>
    <VSTextArea label="<Drag left and right>" resize="horizontal" />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Resize None</p>
    <VSTextArea label="<Not resizable>" resize="none" />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Autogrow</p>
    <VSTextArea label="Auto resize" autogrow />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Autogrow no label</p>
    <VSTextArea autogrow />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Disabled</p>
    <VSTextArea  disabled />
  </div>

  <br>
  <br>

  <div style="margin-bottom: 16px">
    <p>Disabled with a label</p>
    <VSTextArea label="Oh :(" disabled />
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
