<script lang="ts" setup>
import { getHotRecommendAPI, type SubTypeItem } from '@/services/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const props = defineProps<{
  type: string
}>()
const bannerPicture = ref()
const subTypes = ref<SubTypeItem[]>([])
const activeIndex = ref(0)

const currentTitle = urlMap.find((item) => item.type === props.type)

uni.setNavigationBarTitle({ title: currentTitle?.title || '热门好物' })

const getHotRecommendData = async () => {
  const response = await getHotRecommendAPI(currentTitle!.url)
  bannerPicture.value = response.result.bannerPicture
  subTypes.value = response.result.subTypes
}

const onScrollToLower = async () => {
  const currentSubTypes = subTypes.value[activeIndex.value]
  currentSubTypes.goodsItems.page += 1
  const response = await getHotRecommendAPI(currentTitle!.url, {
    subType: currentSubTypes.id,
    page: currentSubTypes.goodsItems.page,
    pageSize: currentSubTypes.goodsItems.pageSize,
  })
  const newSubTypes = response.result.subTypes[activeIndex.value]
  currentSubTypes.goodsItems.items.push(...newSubTypes.goodsItems.items)
  console.log(newSubTypes)
}
onLoad(() => {
  getHotRecommendData()
})
</script>
<template>
  <view class="wrapper">
    <view class="title-bg">
      <image :src="bannerPicture"></image>
    </view>
    <view class="tabs">
      <text
        class="text"
        v-for="(item, index) in subTypes"
        :key="item.id"
        :class="{ active: activeIndex === index }"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
    </view>
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="activeIndex === index"
      @scrolltolower="onScrollToLower"
    >
      <view class="goods">
        <navigator
          :url="`/pages/goods/goods?id=${goods.id}`"
          open-type="navigate"
          hover-class="navigator-hover"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view></navigator
        >
      </view>
      <view class="loading">正在加载... </view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 180rpx 0 0;
  position: relative;
  background-color: #f4f4f4;
  .title-bg {
    width: 100vw;
    height: 225rpx;
    border-radius: 0 0 40rpx 40rpx;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }
  .tabs {
    display: flex;
    justify-content: space-around;
    box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
    background: white;
    border-radius: 20rpx;
    line-height: 90rpx;
    z-index: 8;
    > .text {
      font-weight: 600;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .active {
      &::after {
        content: '';
        width: 120rpx;
        height: 8rpx;
        border-radius: 4rpx;
        background-color: #008080;
        position: absolute;
        top: 72rpx;
        transition: all 0.5ms;
      }
    }
  }
  .scroll-view {
    flex: 1;
  }
  .goods {
    display: grid;
    grid: auto-flow / repeat(2, 1fr);
    grid-column-gap: 10rpx;
    grid-row-gap: 10rpx;
    place-items: center;
    .navigator {
      width: 345rpx;
      padding: 20rpx;
      margin-top: 20rpx;
      border-radius: 10rpx;
      background-color: #fff;
      .thumb {
        width: 305rpx;
        height: 305rpx;
      }
      .name {
        height: 88rpx;
        font-size: 26rpx;
      }
      .price {
        line-height: 1;
        font-size: 30rpx;
      }
      .symbol {
        font-size: 80%;
      }
      .number {
        color: #cf4444;
      }
    }
  }
  .loading {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0 50rpx;
  }
}
</style>
