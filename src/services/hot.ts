import type { GoodsItem, PageResult } from '@/types/global'
import { http } from '@/utils/http'

export type HotParams = {
  pageSize: number
  page: number
  subType: string
}

export type SubTypeItem = {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}

export type HotResult = {
  id: string
  bannerPicture: string
  title: string
  subTypes: SubTypeItem[]
}

export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
