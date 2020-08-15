import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainLayout from '@/components/main-layout/MainLayout.vue'
import routeUtils from '@/utils/routeUtils'
import lodash, { fromPairs } from 'lodash'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/auth/redirect',
    name: 'AuthRedirect',
    component: () => import('@/views/login/AuthRedirect.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((from, to, next) => {
  next()
})

router.afterEach(() => {

})

export default router

const menuListStr = window.sessionStorage.getItem('menuList')
if (!lodash.isNull(menuListStr)) {
  try {
    router.addRoutes([{
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: routeUtils.buildRoutes(JSON.parse(menuListStr))
    }])
  } catch (err) { }
}
