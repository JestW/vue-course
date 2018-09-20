import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from "../lib/utils";

Vue.use(Router);

const router = new Router({
    routes
});

// 是否登陆的函数，
const HAS_LOGINED = true;

// 全局守卫
// 全局前置守卫 // to和from都是路由对象,next是一个函数，跳转要用到
router.beforeEach((to, from , next) => {
  to.meta && setTitle(to.meta.title);
  if (to.name !== 'login') {
    if (HAS_LOGINED) next();
    // 这里next的用法和push一样的
    else next({name: 'login'})
  } else {
    if (HAS_LOGINED) next({name: 'home'});
    else next();
  }
});

// router.beforeResolve()

// 后置钩子，跳转之后触发, 没有next，因为他不能阻止对页面的操作，不能阻止跳转
router.afterEach((to, from) => {
  // 可以做一些简单的操作
  // 比如说加载的时候可以吧加载的loading取消掉，loading=false
});

/**
* 1,导航被触发
 * 2，在失活的组件（即将离开的组件调用离开守卫）beforeRouteLeave
 * 3, 调用全局的前置守卫beforeEach
 * 4，再重用的组建里调用beforeRouteUpdate，（（不是重用的调用beforeRouteEnter））
 * 5，调用路由独享的守卫beforeEnter（这个是在理由列表里面配置的）
 * 6，解析异步路由组件
 * 7，在被激活的组建里（即将进入的组件）里调用beforeRouteEnter
 * 8，调用全局的解析守卫beforeResolve
 * 9.导航确认
 * 10，调用全局的后置守卫afterEach
 * 11， 触发DOM的渲染
 * 12，用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数
 *
 */

export default router
