import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store/index'
import { MenuData, TagData } from '@/model'
import lodash from 'lodash'
import menuApi from '@/api/menu'

@Module({ name: 'menuState', store, dynamic: true })
class MenuModule extends VuexModule {
  menuList: MenuData[] = menuApi.getMenuList()
  isCollapse = false
  openedTags: TagData[] = []

  @Mutation
  setMenuList (menuList: MenuData[]) {
    this.menuList = menuList
  }

  @Mutation
  setIsCollapse (isCollapse: boolean) {
    this.isCollapse = isCollapse
  }

  @Mutation
  setOpenedTags (openedTags: TagData[]) {
    this.openedTags = openedTags
  }

  @Mutation
  addOpenedTag0 (tag: TagData) {
    this.openedTags.push(tag)
  }

  @Mutation
  removeOpendTag0 (index: number) {
    this.openedTags.slice(index, 1)
  }

  @Action
  updateMenuList (menuList: MenuData[]) {
    this.context.commit('setMenuList', menuList)
    window.sessionStorage.setItem('menuList', JSON.stringify(menuList))
  }

  @Action
  updateIsCollapse (isCollapse: boolean) {
    this.context.commit('setIsCollapse', isCollapse)
    window.sessionStorage.setItem('isCollapse', JSON.stringify(isCollapse))
  }

  @Action
  updateOpenedTags (openedTags: TagData[]) {
    this.context.commit('setOpenedTags', openedTags)
    window.sessionStorage.setItem('openedTags', JSON.stringify(this.openedTags))
  }

  @Action
  addOpenedTag (tag: TagData) {
    this.context.commit('addOpenedTag0', tag)
    window.sessionStorage.setItem('openedTags', JSON.stringify(this.openedTags))
  }

  @Action
  removeOpenedTag (index: number) {
    this.context.commit('removeOpendTag0', index)
    window.sessionStorage.setItem('openedTags', JSON.stringify(this.openedTags))
  }
}

export const menuState = getModule(MenuModule)

const menuListStr = window.sessionStorage.getItem('menuList')
if (!lodash.isNull(menuListStr)) {
  try {
    menuState.setMenuList(JSON.parse(menuListStr))
  } catch (err) { }
}

const isCollapseStr = window.sessionStorage.getItem('isCollapse')
if (!lodash.isNull(isCollapseStr)) {
  try {
    menuState.setIsCollapse(isCollapseStr === 'true')
  } catch (err) { }
}

const openedTagsStr = window.sessionStorage.getItem('openedTags')
if (!lodash.isNull(openedTagsStr)) {
  try {
    menuState.setOpenedTags(JSON.parse(openedTagsStr))
  } catch (err) { }
}
