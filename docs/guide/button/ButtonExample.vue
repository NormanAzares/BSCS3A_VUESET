<template>
  <div style="margin-bottom: 16px;">Examples</div>
  <div style="display: flex; flex-direction: row;">
    <div style="margin-right: 16px">
      <VSButton label="Default" />
    </div>
    <div style="margin-right: 16px">
      <VSButton label="Outlined" type="outlined" />
    </div>
    <div style="margin-right: 16px">
      <VSButton label="Text" type="text" />
    </div>
    <div>
      <VSButton label="Disabled" type="text" disabled />
    </div>
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

<style scoped></style>
