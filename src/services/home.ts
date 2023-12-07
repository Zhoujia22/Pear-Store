import type { PageParams } from '@/components/Guess.vue'
import type { GoodsItem, PageResult } from '@/types/global'
import { http } from '@/utils/http'
/**
 * 首页-广告区域
 * @param distributionSite 广告区域展示位置   1 为首页（默认值）2 为商品分类页
 * @returns
 *
 */
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

export type CategoryItem = {
  id: string
  name: string
  icon: string
}

export type HotItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

export const getHomeGoodsGuessAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
export type GuessItem = GoodsItem
