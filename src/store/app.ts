import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store/index'

@Module({ name: 'appState', store, dynamic: true })
class AppModule extends VuexModule {
  systemName = '博客管理后台'
}

export const appState = getModule(AppModule)
