<template>
  <div style="display: flex; flex-direction: row;">
    <div style="margin-right: 16px">
      <VSSelect type="primary" isOutline>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </VSSelect>
    </div>
    <div style="margin-right: 16px">
      <VSSelect type="light">
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </VSSelect>
    </div>
    <div style="margin-right: 16px">
      <VSSelect type="dark" isOutline>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </VSSelect>
    </div>
    <div style="margin-right: 16px">
      <VSSelect type="blue1" isOutline>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </VSSelect>
    </div>
    <div style="margin-right: 16px">
      <VSSelect type="blue2" isOutline>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </VSSelect>
    </div>
  </div>
</template>


<script>
import { VSSelect } from '../../../src/components/index';

export default {
  name: 'SelectExample',
  components: {
    VSSelect,
  },
}
</script>