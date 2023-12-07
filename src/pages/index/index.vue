<script setup lang="ts">
import CustomSwiper from '@/components/CustomSwiper.vue'
import CustomNavbar from '@/components/CustomNavbar.vue'
import CategoryPanel from '@/components/CategoryPanel.vue'
import NoticeBar from '@/components/NoticeBar.vue'
import HotPanel from '@/components/HotPanel.vue'
import Guess from '@/components/Guess.vue'
import {
  getHomeBannerAPI,
  type BannerItem,
  getHomeCategoryAPI,
  type CategoryItem,
  type HotItem,
  getHomeHotAPI,
} from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref, type ComponentPublicInstance } from 'vue'
import PageSkeleton from '@/components/PageSkeleton.vue'
import type { Fragment } from 'vue'

const title =
  '🎄圣诞狂欢，大放送！🎁 抢购即享折上95折，满300元再减30元！限时3天，快来享受节日特惠！🛍️✨'
//新建list容器
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
//bind容器
const guessRef = ref<InstanceType<typeof Guess>>()
//动画开关
const isTriggered = ref(false)
//骨架屏开关
const isLoading = ref(false)
//获取数据
const getHomeBannerData = async () => {
  const response = await getHomeBannerAPI()
  bannerList.value = response.result
}

const getHomeCategoryData = async () => {
  const response = await getHomeCategoryAPI()
  categoryList.value = response.result
}

const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

//页面加载调用API
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

//下滑
const scrollByBottom = () => {
  guessRef.value?.getMore()
}
//上拉
const scrollByTop = async () => {
  // 开始动画
  isTriggered.value = true
  guessRef.value?.refresh()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="scrollByTop"
    :refresher-triggered="isTriggered"
    @scrolltolower="scrollByBottom"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <Fragment v-else>
      <NoticeBar :title="title" :speed="50" />
      <CustomSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <Guess ref="guessRef" />
    </Fragment>
  </scroll-view>
</template>

<style lang="scss">
page {
  background: #e8e8e8;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
