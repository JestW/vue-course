<template>
    <div>
        <input @input="handleInput" :value="value" />
    </div>
</template>
<script>
export default {
    name: "AInput",
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    methods: {
        handleInput (event) {
            const value = event.target.value;
            this.$emit('input', value)
        }
    }
}
</script>
<style scoped>
</style>
