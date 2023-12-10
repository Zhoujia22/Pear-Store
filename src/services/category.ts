import type { GoodsItem } from '@/types/global'
import { http } from '@/utils/http'

export type CategoryChildItem = {
  goods: GoodsItem[]
  id: string
  name: string
  picture: string
}

export type CategoryTopItem = {
  children: CategoryChildItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
