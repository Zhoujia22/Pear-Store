<script setup lang="ts">
import { postLoginWxMinAPI, postLoginWxMinSimpleAPI, type LoginResult } from '@/services/login'
import { useMemberStore } from '@/stores'
import { onLoad } from '@dcloudio/uni-app'
let code = ''

onLoad(async () => {
  const response = await wx.login()
  code = response.code
})
//目前无法使用
const onGetPhoneNumber: UniHelper.ButtonOnGetphonenumber = async (e) => {
  const encryptedData = e.detail.encryptedData!
  const iv = e.detail.iv!
  const response = await postLoginWxMinAPI({ encryptedData, iv, code })
  loginSuccess(response.result)
}

//测试使用
const onGetphonenumberSimple = async () => {
  const response = await postLoginWxMinSimpleAPI('17600000000')
  loginSuccess(response.result)
}

const loginSuccess = (profile: LoginResult) => {
  const memberStore = useMemberStore()
  memberStore.setProfile(profile)
  uni.showToast({ icon: 'success', title: '登录成功' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/my/my' })
  }, 500)
}
</script>

<template>
  <view class="wrapper">
    <view class="logo">
      <image src="../../static/images/P.png" mode="scaleToFill" />
      <text class="name">Pear Store</text>
    </view>
    <view class="login">
      <button class="button" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
        <text class="icon icon-phone"></text>
        手机号快捷登录
      </button>
      <view class="extra">
        <view class="caption">
          <text>其他登录方式</text>
        </view>
        <view class="options">
          <button @tap="onGetphonenumberSimple">
            <text class="icon icon-phone">模拟快捷登录</text>
          </button>
        </view>
      </view>
      <view class="tips">登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20rpx 40rpx;
  background: #f5f6f8;
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    image {
      width: 220rpx;
      height: 220rpx;
      margin-top: 15vh;
    }
    .name {
      font-size: 32 rpx;
      font-weight: 600;
      padding-top: 32rpx;
    }
  }
  .login {
    display: flex;
    flex-direction: column;
    height: 60vh;
    padding: 240rpx 20rpx 20rpx;
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80rpx;
      font-size: 28rpx;
      color: #fff;
      background: #c03e46;
      .icon {
        font-size: 40rpx;
        margin-right: 6rpx;
      }
    }
    .extra {
      flex: 1;
      padding: 50rpx 70rpx 0;
      .caption {
        width: 440rpx;
        line-height: 1;
        border-top: 1rpx solid #ddd;
        font-size: 26rpx;
        color: #999;
        position: relative;
        text {
          transform: translate(-40%);
          background-color: #fff;
          position: absolute;
          top: -16rpx;
          left: 50%;
        }
      }
      .options {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70rpx;
        button {
          height: 80rpx;
          font-size: 28rpx;
          border: 1rpx solid #c03e46;
          color: #c03e46;
        }
      }
    }
  }
  .tips {
    position: absolute;
    bottom: 80rpx;
    left: 20rpx;
    right: 20rpx;
    font-size: 22rpx;
    color: #999;
    text-align: center;
  }
}
</style>
