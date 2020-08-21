export interface ResultBean {
  code: string
  msg: string
  data?: any
}

export interface MenuData {
  id: string
  url: string
  name: string
  title: string
  icon: string
  parentId: string
  children?: MenuData[]
}

export interface TagData {
  url: string
  name: string
  title: string
}

export interface AuthInfo {
  accessToken: string
  createdAt: number
  expiresIn: number
  refreshToken: string
  scope: string
  tokenType: string
}

export interface UserInfo {

}
