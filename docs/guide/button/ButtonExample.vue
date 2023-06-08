<template>
  <div style="margin-bottom: 16px">
    <Button label="Default" />
  </div>
  <div style="margin-bottom: 16px">
    <Button label="Outlined" type="outlined" />
  </div>
  <div style="margin-bottom: 16px">
    <Button label="Text" type="text" />
  </div>
  <div>
    <Button label="Disabled" type="text" disabled />
  </div>
</template>
<script>
import { VSButton } from '../../../src/components/index'

export default {
  name: 'ButtonExample',
  components: {
    VSButton,
  },
}
</script>
