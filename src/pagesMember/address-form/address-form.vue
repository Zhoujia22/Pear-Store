<script setup lang="ts"></script>

<template>
  <view class="content">
    <form>
      <view class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" value="" />
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" value="" />
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" value="">
          <view v-if="false">广东省 广州市 天河区</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" value="" />
      </view>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch class="switch" color="#cf4444" :checked="true" />
      </view>
    </form>
  </view>
  <button class="button">保存并使用</button>
</template>
<style lang="scss" scoped>
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;
  }
  .uni-forms-item__content {
    display: flex;
  }
  .uni-forms-item__error {
    margin-left: 200rpx;
  }

  &:last-child {
    border: none;
  }
  .label {
    width: 200rpx;
    color: #333;
  }
  .input {
    flex: 1;
    display: block;
    height: 46rpx;
  }
  .picker {
    flex: 1;
  }
  .placeholder {
    color: #808080;
  }
  .switch {
    position: absolute;
    right: -20rpx;
    transform: scale(0.8);
  }
}
.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #333;
}
</style>
