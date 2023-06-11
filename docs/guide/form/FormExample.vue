<template>
    Default Primary
    <VSForm type="primary" />
    Light
    <VSForm type="light" />
    Dark
    <VSForm type="dark" />
    Blue1
    <VSForm type="blue1" />
    Blue2
    <VSForm type="blue2" />
</template>

<script>
import { VSForm } from '../../../src/components/index'

export default {
    name: 'FormExample',
    components: {
        VSForm,
    },
}
</script>