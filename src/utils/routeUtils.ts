import { MenuData, TagData } from '@/model'
import { RouteConfig } from 'vue-router'
import lodash from 'lodash'

const buildOneRoute = (menu: MenuData, routes: RouteConfig[], breadcrumbList: TagData[]) => {
  if (menu.children) {
    menu.children.forEach(submenu => {
      breadcrumbList.push({ name: submenu.name, title: submenu.title, url: submenu.url })
      buildOneRoute(submenu, routes, breadcrumbList)
      breadcrumbList.pop()
    })
  } else {
    const i = menu.url.lastIndexOf('/')
    const name = lodash.capitalize(menu.url.substring(i + 1))
    routes.push({
      name: name,
      path: menu.url,
      component: () => import('@/view' + ('/' + menu.url.substring(0, i) + name + 'vue').replace(/(?<!\/)\/+(?!\/)/g, '/')),
      meta: { breadcrumbList: lodash.cloneDeep(breadcrumbList) }
    })
  }
}

const buildRoutes = (menuList: MenuData[]): RouteConfig[] => {
  const routes: RouteConfig[] = []
  const breadcrumbList: TagData[] = []
  menuList.forEach(menu => {
    breadcrumbList.push({ name: menu.name, title: menu.title, url: menu.url })
    buildOneRoute(menu, routes, breadcrumbList)
    breadcrumbList.pop()
  })
  return routes
}

export default { buildRoutes }
