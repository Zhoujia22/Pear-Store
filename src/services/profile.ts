import { http } from "@/utils/http"

export type BaseProfile = {
  id: number
  avatar: string
  account: string
  nickname?: string
}


export type LoginResult = BaseProfile & {
  mobile: string
  token: string
}

export type ProfileDetail = BaseProfile & {
  gender?: Gender
  birthday?: string
  fullLocation?: string
  profession?: string
}

export type Gender = '女' | '男'

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile'
  })
}
