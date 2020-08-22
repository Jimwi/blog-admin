import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainLayout from '@/components/main-layout/MainLayout.vue'
import routeUtils from '@/utils/routeUtils'
import lodash, { fromPairs } from 'lodash'
import auth from '@/api/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, trickleSpeed: 100 })

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
        meta: { breadcrumbList: [{ name: 'Home', title: '主页', url: '/home' }] },
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

router.beforeEach((to, from, next) => {
  NProgress.start()
  const path = to.path
  if (auth.loggedIn()) {
    if (path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    if (path === '/auth/redirect' || path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
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
