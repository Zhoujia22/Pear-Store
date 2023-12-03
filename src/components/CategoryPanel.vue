<script setup lang="ts">
import type { CategoryItem } from '@/services/home'

const props = defineProps<{ list: CategoryItem[] }>()
</script>

<template>
  <view class="wrapper">
    <navigator
      url="pages/index/index"
      hover-class="navigator-hover"
      v-for="item in props.list"
      :key="item.id"
    >
      <view class="category">
        <image class="image" :src="item.icon"></image>
        <text class="title">{{ item.name }}</text>
      </view>
    </navigator>
  </view>
</template>

<style scoped lang="scss">
.wrapper {
  background: #ffffff;
  min-height: 328rpx;
  margin: 10rpx;
  padding-top: 10px;
  display: grid;
  grid: repeat(2, 150rpx) / auto-flow;
  border-radius: 15rpx;
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: 100rpx;
    height: 100rpx;
    margin-bottom: -10rpx;
  }
  .title {
    font-size: 25rpx;
    color: #8e8d8b;
  }
}
</style>
