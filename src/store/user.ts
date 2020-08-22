import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store/index'
import { AuthInfo, UserInfo } from '@/model'
import lodash from 'lodash'

function emptyAuthInfo () {
  return {
    accessToken: '',
    createdAt: 0,
    expiresIn: 0,
    refreshToken: '',
    scope: '',
    tokenType: ''
  }
}

function emptyUserInfo () {
  return {
    avatarUrl: '',
    email: '',
    id: 0,
    login: '',
    name: ''
  }
}

@Module({ name: 'userState', store, dynamic: true })
class UserModule extends VuexModule {
  authInfo: AuthInfo = emptyAuthInfo()
  userInfo: UserInfo = emptyUserInfo()

  @Mutation
  setAuthInfo (authInfo: AuthInfo) {
    this.authInfo = authInfo
  }

  @Mutation
  setUserInfo (userInfo: UserInfo) {
    this.userInfo = userInfo
  }

  @Action
  updateAuthInfo (authInfo: AuthInfo) {
    this.context.commit('setAuthInfo', authInfo)
    window.sessionStorage.setItem('authInfo', JSON.stringify(authInfo))
  }

  @Action
  updateUserInfo (userInfo: UserInfo) {
    this.context.commit('setUserInfo', userInfo)
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  @Action
  removeUserInfo () {
    this.context.commit('setUserInfo', emptyUserInfo())
    window.sessionStorage.removeItem('userInfo')
  }

  @Action
  removeAuthInfo () {
    this.context.commit('setAuthInfo', emptyAuthInfo())
    window.sessionStorage.removeItem('authInfo')
  }
}

export const userState = getModule(UserModule)

const authInfoStr = window.sessionStorage.getItem('authInfo')
if (!lodash.isNull(authInfoStr)) {
  try {
    userState.setAuthInfo(JSON.parse(authInfoStr))
  } catch (err) { }
}

const userInfoStr = window.sessionStorage.getItem('userInfo')
if (!lodash.isNull(userInfoStr)) {
  try {
    userState.setUserInfo(JSON.parse(userInfoStr))
  } catch (err) { }
}
