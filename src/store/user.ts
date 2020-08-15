import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store/index'

@Module({ name: 'userState', store, dynamic: true })
class UserModule extends VuexModule {

}

export const userState = getModule(UserModule)
