import { http } from '@/utils/http'

export type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

export type LoginResult = {
  nid: string
  mobile: string
  token: string
  nickname: string
  avatar: string
  account: string
}

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
