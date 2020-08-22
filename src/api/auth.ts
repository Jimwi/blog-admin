import Axios from 'axios'
import { ResultBean, UserInfo, AuthInfo } from '@/model'

const clientId = '66fa986d6909b844394fe768303dc3b714b95506a6bb273b99b46d44f97cda89'
const clientSecret = 'd903621efe5633cf9ebfd24a7d86d24010654c411418a6534a5dba4dd55cf637'
const redirectUri = 'http://localhost:8080/auth/redirect'
const loginUrl = `https://gitee.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
const authInfoUrl = 'https://gitee.com/oauth/token'
const userInfoUrl = 'https://gitee.com/api/v5/user'

const login = () => {
  window.location.href = loginUrl
}

const getAuthInfo = async (code: string): Promise<any> => {
  const response = await Axios(authInfoUrl, {
    method: 'POST',
    params: {
      grant_type: 'authorization_code',
      code: code,
      client_id: clientId,
      redirect_uri: redirectUri,
      client_secret: clientSecret
    }
  })
  const auth_info = response.data
  return {
    accessToken: auth_info.access_token,
    createdAt: auth_info.created_at,
    expiresIn: auth_info.expires_in,
    refreshToken: auth_info.refresh_token,
    scope: auth_info.scope,
    tokenType: auth_info.token_type
  }
}

const getUserInfo = async (accessToken: string): Promise<UserInfo> => {
  const response = await Axios(userInfoUrl, {
    method: 'GET',
    params: { access_token: accessToken }
  })
  const user_info = response.data
  return {
    id: user_info.id,
    login: user_info.login,
    name: user_info.name,
    avatarUrl: user_info.avatar_url,
    email: user_info.email
  }
}

const logout = () => {
  console.log('logout')
}

const loggedIn = (): boolean => {
  const authInfoStr = window.sessionStorage.getItem('authInfo')
  if (authInfoStr === null) {
    return false
  }
  try {
    const authInfo = JSON.parse(authInfoStr) as AuthInfo
    if (authInfo.accessToken === '') {
      return false
    }
  } catch (err) {
    return false
  }
  return true
}

export default { login, getAuthInfo, getUserInfo, logout, loggedIn }
