<script lang="ts" setup>
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

const onLogout = () => {
  uni.showModal({
    title: '你真的要退出吗？',
    success: ({ confirm, cancel }) => {
      if (confirm) {
        memberStore.clearProfile()
        uni.navigateBack()
      }
    },
  })
}
</script>

<template>
  <view class="viewport">
    <view class="list" v-if="memberStore.profile">
      <navigator url="/pagesMember/address/address" hover-class="none" class="item arrow">
        我的收货地址
      </navigator>
    </view>
    <view class="list">
      <button hover-class="none" class="item arrow" open-type="openSetting">授权管理</button>
      <button hover-class="none" class="item arrow" open-type="feedback">问题反馈</button>
      <button hover-class="none" class="item arrow" open-type="contact">联系我们</button>
    </view>
    <view class="list">
      <navigator hover-class="none" class="item arrow" url=" ">关于我们</navigator>
    </view>
    <view class="action" v-if="memberStore.profile">
      <view class="button" @tap="onLogout">退出登录</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  padding: 20rpx;
}

.list {
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  .item {
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #333;
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: #fff;
    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }
    &::after {
      right: 5rpx;
    }
  }
  .arrow::after {
    content: '\e6c2';
    position: absolute;
    top: 50%;
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

.action {
  text-align: center;
  line-height: 90rpx;
  margin-top: 40rpx;
  font-size: 32rpx;
  color: #333;
  .button {
    background-color: #c03e46;
    color: white;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
}
</style>
