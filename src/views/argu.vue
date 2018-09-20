<template>
    <div>
        {{ $route.params.name }}
    </div>
</template>

<script>
export default {
    name: "argu",
    // props: {
    //     name: {
    //         type: [String, Number],// string 或者 number类型
    //         default: 'Lison'
    //     }
    // },
    // 这个是路由发生变化，组件被复用的情况下才会被调用，注意第一次进去的时候是没有调用的
    // 调用这个钩子的时候，已经渲染好了，可以使用this
    beforeRouteUpdate(to, from ,next) {
        debugger;
        // console.log(to.name, from.name);
        next()
    },
    beforeRouteEnter(to, from, next) {
        console.log(to.name);
        debugger;
        next()
    },
}
</script>

<style scoped>

</style>
