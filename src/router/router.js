import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    alias: 'home_page',
    component: Home,
    props: route => ({
        food: route.query.food
    })
    // beforeEnter: ((to, from , next) => {
    //   if (from.name === 'about') alert('这是从about页面来的');
    //   else alert('这不是从about页面来的');
    //   next()
    // })
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    // props: true,
    component: () => import('@/views/argu.vue')
  },
    {
      path: '/parent',
      component: () => import('@/views/parent.vue'),
        children: [
            {
              path: 'child',
              component: () => import('@/views/child.vue')
            }
        ]
    },
    {
      path: '/named_view',
      components: {
        default: () => import('@/views/child.vue'),
        email: () => import('@/views/email.vue'),
        tel: () => import('@/views/tel.vue')
      }
    },
    {
      path: '/main',
      redirect: {
        name: 'home'
      }
    },
    {
        path: '/login',
       component: () => import('@/views/login.vue')
    },
    {
      path: '/store',
      component: () => import('@/views/store.vue')
    },
    {
        path: '*',
        component: () => import('@/views/error404.vue')
    }
]
