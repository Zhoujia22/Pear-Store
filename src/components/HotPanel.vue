<script setup lang="ts">
import type { HotItem } from '@/services/home'

const { list } = defineProps<{ list: HotItem[] }>()
</script>

<template>
  <view class="wrapper">
    <view class="proposeItem" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator
        class="cards"
        :url="`/pages/hot/hot?type=${item.type}`"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <image v-for="src in item.pictures" :key="src" class="image" mode="aspectFit" :src="src" />
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 508rpx;
  background: #ffffff;
  margin-left: 10rpx;
  margin-right: 10rpx;
  border-radius: 15rpx;
  display: flex;
  flex-wrap: wrap;
  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;
    .title-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }
  .proposeItem {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #e8e8e8;
    border-top: 1rpx solid #e8e8e8;
    .title {
      justify-content: start;
    }
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }
  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
