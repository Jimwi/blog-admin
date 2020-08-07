import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainLayout from '@/components/main-layout/MainLayout.vue'
import routeUtils from '@/utils/routeUtils'
import lodash from 'lodash'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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
  base: process.env.BASE_URL,
  routes
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
