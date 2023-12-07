import { http } from '@/utils/http'

type HotParams = {
  pageSize: number
  page: number
  subType: string
}

export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
