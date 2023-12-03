<script setup lang="ts">
import { getHomeGoodsGuessAPI, type GuessItem } from '@/services/home'
import { ref } from 'vue'
import { onMounted } from 'vue'

export type PageParams = {
  page: number
  pageSize: number
}

const guessList = ref<GuessItem[]>([])
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
const guessEnd = ref(false)

const getHomeGoodsGuessData = async () => {
  if (guessEnd.value) {
    return uni.showToast({ icon: 'none', title: '没有更多数据~' })
  }
  const response = await getHomeGoodsGuessAPI(pageParams)
  guessList.value.push(...response.result.items)
  pageParams.page = response.result.page + 1
  guessEnd.value = pageParams.page > response.result.pages ? true : false
}

onMounted(() => {
  getHomeGoodsGuessData()
})

const refresh = () => {
  pageParams.page = 1
  guessList.value = []
  guessEnd.value = false
}

defineExpose({ getMore: getHomeGoodsGuessData, refresh })
</script>
<template>
  <view class="wrapper">
    <view class="caption">
      <uni-icons type="fire" size="30" color="#c03e46" class="icon"></uni-icons>
      <h2 class="text">精选推荐</h2>
    </view>
    <view class="guess">
      <navigator
        class="guess-item"
        :url="`/pages/goods/goods`"
        open-type="navigate"
        hover-class="navigator-hover"
        v-for="item in guessList"
        :key="item.id"
      >
        <image class="image" :src="item.picture" mode="aspectFill" />
        <view class="name">{{ item.name }} </view>
        <view class="price">
          <text class="currency">￥</text>
          <text>{{ item.price }}</text>
        </view>
      </navigator>
    </view>
    <view class="loading"> {{ guessEnd ? '已经到底啦！' : '正在加载中...' }} </view>
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #ffffff;
  margin: 10rpx;
  border-radius: 15rpx;
  .caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    font-size: 32rpx;
    color: #262626;
    padding: 40rpx 0;
    position: relative;
    &::after {
      border: 1rpx solid #c03e46;
      content: '';
      width: 680rpx;
      position: absolute;
      top: 100rpx;
      border-radius: 50%;
    }
    .icon {
      margin-right: 8rpx;
    }
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;
    .guess-item {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: #fff;
      .image {
        width: 304rpx;
        height: 260rpx;
      }
      .name {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
        .currency {
          font-size: 80%;
        }
      }
    }
  }
  .loading {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
