import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter(
  {
    mode: 'history',
    routes: [
      { path: '/', component: () => import('@/page/login') },
      {
        path: '/index', component: () => import('@/page/home')
      },
      { path: '/blank', component: () => import('@/page/blank') },
      // { path: '*', component: () => import('@/page/404') },
    ]
  }
)