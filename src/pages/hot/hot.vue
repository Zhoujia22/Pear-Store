<script lang="ts" setup>
import { getHotRecommendAPI } from '@/services/hot'
import { onLoad } from '@dcloudio/uni-app'

const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const props = defineProps<{
  type: string
}>()
const currentTitle = urlMap.find((item) => item.type === props.type)

uni.setNavigationBarTitle({ title: currentTitle?.title || '热门好物' })

const getHotRecommendData = async () => {
  const response = await getHotRecommendAPI(currentTitle!.url)
}
onLoad(() => {
  getHotRecommendData()
})
</script>
<template>
  <view class="wrapper">
    <view class="title-bg">
      <image
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/84abb5b1-8344-49ae-afc1-9cb932f3d593.jpg"
      ></image>
    </view>
    <view class="tabs">
      <text class="text active">抢鲜体验</text>
      <text class="text">新品预告</text>
    </view>
    <scroll-view scroll-y class="scroll-view">
      <view class="goods">
        <navigator
          url="/pages/"
          open-type="navigate"
          hover-class="navigator-hover"
          class="navigator"
          v-for="item in 50"
          :key="item"
        >
          <image
            class="thumb"
            src="https://yanxuan-item.nosdn.127.net/5e7864647286c7447eeee7f0025f8c11.png"
          ></image>
          <view class="ellipsis">不含酒精，使用安心爽肤清洁湿巾</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">29.90</text>
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
