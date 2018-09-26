<template>
    <div>
        <p>AShow: {{ content }}</p>
    </div>
</template>
<script>
export default {
    name: "AShow",
    props: {
        content: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
</style>
