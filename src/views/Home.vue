<template>
  <div class="home">
    {{ food }}
      <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
    props: {
      food: {
          type: String,
          default: 'apple'
      }
    },
    // 组件内的守卫，这个时候整个页面没有渲染，所以不能调用this,但是可以在next里调用，如下
    beforeRouteEnter(to, from, next) {
      console.log(to.name);
      next(vm => {
          console.log(vm)
      }) // 如果没有next()是不能跳转的
    },
    //
    beforeRouteLeave (to, from ,next) {
      const leave = confirm('您确定要离开吗？');
      if (leave) next();
      else next(false) // 传入false页面就不会跳转
    }
}
</script>
