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

export type OrderCreateParams = {
  addressId: string
  deliveryTimeType: number
  buyerMessage: string
  goods: {
    count: number
    skuId: string
  }[]
  payChannel: 1 | 2
  payType: 1 | 2
}

export type OrderCreateResult = {
  id: string
}

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}


export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data
  })
}
