<script setup lang="ts">
import {
  getMemberAddressAPI,
  type AddressItem,
  deleteMemberAddressByIdAPI,
} from '@/services/address'
import { useAddressStore } from '@/stores/modules/address'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

const addressList = ref<AddressItem[]>([])

const getMemberAddressData = async () => {
  const response = await getMemberAddressAPI()
  addressList.value = response.result
}

const onDeleteAddress = (id: string) => {
  uni.showModal({
    content: '是否要删除地址?',
    success: async (response) => {
      if (response.confirm) {
        await deleteMemberAddressByIdAPI(id)
        getMemberAddressData()
      }
    },
  })
}

const onChangeAddress = (value: AddressItem) => {
  const addressStore = useAddressStore()
  addressStore.changeSelectedAddress(value)
  uni.navigateBack()
}
onShow(() => {
  getMemberAddressData()
})
</script>

<template>
  <view class="viewport">
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="addressList.length" class="address">
        <uni-swipe-action class="address-list">
          <uni-swipe-action-item class="item" v-for="item in addressList" :key="item.id">
            <view class="item-content" @tap="onChangeAddress(item)">
              <view class="user">
                {{ item.receiver }}
                <text class="contact">{{ item.contact }}</text>
                <text v-if="item.isDefault" class="badge">默认</text>
              </view>
              <view class="locate">{{ item.fullLocation }} {{ item.address }}</view>
              <navigator
                class="edit"
                hover-class="none"
                :url="`/pagesMember/address-form/address-form?id=${item.id}`"
                @tap.stop="() => {}"
              >
                修改
              </navigator>
            </view>
            <template #right>
              <button @tap="onDeleteAddress(item.id)" class="delete-button">删除</button>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <view class="add-btn">
      <navigator hover-class="none" url="/pagesMember/address-form/address-form">
        新建地址
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.viewport {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 20rpx;
  }
}
.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background: #fff;
  .item-content {
    line-height: 1;
    padding: 40rpx 0rpx 38rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    .edit {
      position: absolute;
      top: 36rpx;
      right: 36rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #666;
      line-height: 1;
    }
  }
  .item:last-child .item-content {
    border: none;
  }
  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;
    .contact {
      color: #666;
    }
    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #c03e46;
      border-radius: 6rpx;
      border: 1rpx solid #c03e46;
    }
  }
  .locate {
    line-height: 1.6;
    font-size: 24rpx;
    color: #333;
  }

  .delete-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120rpx;
    height: 100%;
    font-size: 28rpx;
    color: #fff;
    border-radius: 0;
    padding: 0;
    background-color: #cf4444;
  }
}
.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #888;
}
.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #333333;
}
</style>
