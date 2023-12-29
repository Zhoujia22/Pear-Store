import { http } from '@/utils/http'

export type AddressParams = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
}

export type AddressItem = AddressParams & {
  id: string
  fullLocation: string
}

export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
