import { useMemberStore } from '@/stores'

type Data<T> = {
  code?: string
  msg?: string
  result: T
}

const base = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor: UniNamespace.InterceptorOptions = {
  invoke(options: UniNamespace.RequestOptions) {
    //base url 补全
    if (!options.url.startsWith('http')) {
      options.url = base + options.url
    }
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //添加Token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = <T>(options: UniNamespace.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(response) {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(response.data as Data<T>)
        } else if (response.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(response)
        } else {
          uni.showToast({
            title: (response.data as Data<T>).msg || '请求出错啦',
            icon: 'none',
          })
          reject(response)
        }
      },
      fail(error) {
        uni.showToast({
          title: '网络出错啦',
          icon: 'none',
        })
        reject(error)
      },
    })
  })
}
