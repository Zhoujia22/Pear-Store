<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="wrapper" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="logo">
      <image class="logo-image" src="../static/images/logo.png"></image>
      <text class="text">安全</text>
      <text class="text">方便</text>
      <text class="text">快捷</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding-bottom: 20rpx;
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20rpx;
    padding-top: 20rpx;
    > .text {
      font-size: 20rpx;
      font-weight: bold;
      margin-left: 10rpx;
    }
    .logo-image {
      height: 32rpx;
      width: 210rpx;
      margin-right: 20rpx;
    }
  }
}
</style>
