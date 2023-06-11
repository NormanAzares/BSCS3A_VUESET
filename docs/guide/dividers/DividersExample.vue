<template>
    Default
    <VSDividers color="primary" />
    Light with custom height and margin
    <VSDividers color="light" height="1" margin="10px 0" />
    Dark with custom height and margin
    <VSDividers color="dark" height="3" margin="30px 0" />
    Blue with custom height and margin
    <VSDividers color="blue1" height="2" margin="20px 0" />
    Another blue with custom height and margin
    <VSDividers color="blue2" height="2" margin="20px 0" />
</template>

<script>
import { VSDividers } from '../../../src/components/index'

export default {
  name: 'DividersExample',
  components: {
    VSDividers,
  },
}
</script>

<style scoped></style>
