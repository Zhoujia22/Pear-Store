import { http } from '@/utils/http'
import type { AddressItem } from './address'

export type OrderPreResult = {
  goods: OrderPreGoods[]
  summary: {
    totalPrice: number
    postFee: number
    totalPayPrice: number
  }
  userAddresses: AddressItem[]
}

export type OrderPreGoods = {
  attrsText: string
  count: number
  id: string
  name: string
  payPrice: string
  picture: string
  price: string
  skuId: string
  totalPayPrice: string
  totalPrice: string
}

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}
