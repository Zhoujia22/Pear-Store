import { http } from '@/utils/http'

type HotParams = {
  pageSize: number
  page: number
  subType: string
}

type item = {
  desc: string
  id: string
  name: string
  picture: string
  price: number
}

type goodItem = {
  items: item[]
  counts: string
  pages: string
  page: string
  pageSize: string
}

type subTypes = {
  id: string
  title: string
  goodsItems: goodItem[]
}

export type HotResult = {
  title: string
  id: string
  bannerPicture: string
  subTypes: subTypes[]
}

export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
