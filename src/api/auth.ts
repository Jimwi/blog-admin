import Axios from 'axios'
import { ResultBean } from '@/model'

const clientId = '66fa986d6909b844394fe768303dc3b714b95506a6bb273b99b46d44f97cda89'
const clientSecret = 'd903621efe5633cf9ebfd24a7d86d24010654c411418a6534a5dba4dd55cf637'
const redirectUri = 'http://localhost:8080/auth/redirect'
const loginUrl = `https://gitee.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
const authInfoUrl = 'https://gitee.com/oauth/token'
const userInfoUrl = ''

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

const getuserInfo = async (accessToken: string): Promise<any> => {
  const response = await Axios(userInfoUrl, {
    method: 'POST',
    data: { accessToken }
  })
  const user_info = response.data
  return {}
}

const logout = () => {

}

export default { login, getAuthInfo, getuserInfo, logout }