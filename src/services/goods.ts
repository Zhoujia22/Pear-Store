import type { GoodsItem } from '@/types/global'
import { http } from '@/utils/http'

export type GoodsResult = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  details: Details
  mainPictures: string[]
  similarProducts: GoodsItem[]
  skus: SkuItem[]
  specs: SpecItem[]
  userAddresses: UserAddressItem[]
}

export type Details = {
  properties: DetailsPropertyItem[]
  pictures: string[]
}

export type DetailsPropertyItem = {
  name: string
  value: string
}
export type SkuItem = {
  id: string
  inventory: number
  oldPrice: number
  picture: string
  price: number
  skuCode: string
  specs: SkuSpecItem[]
}

export type SkuSpecItem = {
  name: string
  valueName: string
}

export type SpecItem = {
  name: string
  values: SpecValueItem[]
}

export type SpecValueItem = {
  available: boolean
  desc: string
  name: string
  picture: string
}

export type UserAddressItem = {
  address: string
  cityCode: string
  countyCode: string
  fullLocation: string
  id: string
  isDefault: number
  provinceCode: string
}

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
