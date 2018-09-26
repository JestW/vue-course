<template>
    <div>
        <button @click="sendMessage">点击发送bus值</button>
    </div>
</template>

<script>
export default {
    name: "email",
    mounted () {
        console.log(this.$bus);
    },
    methods: {
        sendMessage () {
            this.$bus.$emit('on-click', 'Hello')
        }
    }
}
</script>

<style scoped>

</style>
