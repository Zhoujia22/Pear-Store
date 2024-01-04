<script setup lang="ts">
import type { InputNumberBoxEvent } from '@/components/vk-data-input-number-box/vk-data-input-number-box'
import {
  getMemberCartAPI,
  type CartItem,
  deleteMemberCartAPI,
  putMemberCartBySkuIdAPI,
  putMemberCartSelectedAPI,
} from '@/services/cart'
import { useMemberStore } from '@/stores'
import { onShow } from '@dcloudio/uni-app'
import { computed } from 'vue'
import { ref } from 'vue'

const memberStore = useMemberStore()
const cartList = ref<CartItem[]>([])
const getMemberCartData = async () => {
  const response = await getMemberCartAPI()
  cartList.value = response.result
}
const onDeleteCart = (skuId: string) => {
  uni.showModal({
    content: '你确定要删除吗？',
    success: async (response) => {
      if (response.confirm) {
        await deleteMemberCartAPI({ ids: [skuId] })
      }
    },
  })
}
const onChangeCount = async (e: InputNumberBoxEvent) => {
  await putMemberCartBySkuIdAPI(e.index, { count: e.value })
}

const onChangeSelected = (item: CartItem) => {
  item.selected = !item.selected
  putMemberCartBySkuIdAPI(item.skuId, { selected: item.selected })
}
const isSelectedAll = computed(
  () => cartList.value.length && cartList.value.every((item) => item.selected),
)
const onChangeSelectedAll = async () => {
  const _isSelectedAll = !isSelectedAll.value
  cartList.value.map((item) => (item.selected = _isSelectedAll))
  await putMemberCartSelectedAPI({ selected: _isSelectedAll })
}

const selectedCartList = computed(() => cartList.value.filter((item) => item.selected))

const selectedCartListCount = computed(() =>
  selectedCartList.value.reduce((sum, item) => sum + item.count, 0),
)

const selectedCartListMoney = computed(() =>
  selectedCartList.value.reduce((sun, item) => sun + item.count * item.nowPrice, 0).toFixed(2),
)

const gotoPayment = () => {
  if (cartList.value.length === 0) {
    return uni.showToast({
      icon: 'none',
      title: '请选择商品',
    })
  } else {
    uni.navigateTo({ url: '/pagesOrder/create/create' })
  }
}

onShow(() => {
  if (!memberStore.profile) return
  getMemberCartData()
})
</script>

<template>
  <scroll-view scroll-y class="scroll-view">
    <template v-if="memberStore.profile">
      <view class="cart-list" v-if="cartList.length">
        <view class="tips">
          <text class="label">满减</text>
          <text class="desc">满1件, 即可享受9折优惠</text>
        </view>

        <uni-swipe-action>
          <uni-swipe-action-item v-for="item in cartList" :key="item.skuId" class="cart-swipe">
            <view class="goods">
              <text
                class="checkbox"
                :class="{ checked: item.selected }"
                @tap="onChangeSelected(item)"
              />
              <navigator
                :url="`/pages/goods/goods?id=${item.id}`"
                class="navigator"
                hover-class="none"
              >
                <image :src="item.picture" mode="aspectFill" class="picture" />
                <view class="meta">
                  <view class="name ellipsis">{{ item.name }}</view>
                  <view class="attrsText ellipsis">{{ item.attrsText }}</view>
                  <view class="price">{{ item.nowPrice }}</view>
                </view>
              </navigator>
              <view class="count">
                <vk-data-input-number-box
                  v-model="item.count"
                  :min="1"
                  :max="item.stock"
                  :index="item.skuId"
                  @change="onChangeCount"
                />
              </view>
            </view>
            <template #right>
              <view class="cart-swipe-right">
                <button class="button delete-button" @tap="onDeleteCart(item.skuId)">删除</button>
              </view>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <view v-else class="cart-blank">
        <image src="/static/images/blank_cart.png" class="image" />
        <text class="text">购物车还是空的，快来挑选好货吧</text>
        <navigator url="/pages/index/index" hover-class="none">
          <button class="button">去首页看看吧</button>
        </navigator>
      </view>
      <view class="toolbar">
        <text @tap="onChangeSelectedAll" class="all" :class="{ checked: isSelectedAll }">全选</text>
        <text class="text">合计：</text>
        <text class="amount">{{ selectedCartListMoney }}</text>
        <view class="button-group">
          <view
            @tap="gotoPayment"
            class="button payment-button"
            :class="{ disabled: selectedCartListCount === 0 }"
          >
            去结算({{ selectedCartListCount }})
          </view>
        </view>
      </view>
    </template>
    <view class="login-blank" v-else>
      <text class="text">登录后可查看购物车中的商品</text>
      <navigator url="/pages/login/login" hover-class="none">
        <button class="button">去登录</button>
      </navigator>
    </view>
    <view class="toolbar-height"></view>
  </scroll-view>
</template>
<style lang="scss" scoped>
page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f7f7f8;
}
.scroll-view {
  flex: 1;
}
.cart-list {
  padding: 0 20rpx;

  .tips {
    display: flex;
    align-items: center;
    line-height: 1;
    margin: 30rpx 10rpx;
    font-size: 26rpx;
    color: #666;

    .label {
      color: #fff;
      padding: 7rpx 15rpx 5rpx;
      border-radius: 4rpx;
      font-size: 24rpx;
      background-color: #27ba9b;
      margin-right: 10rpx;
    }
  }

  .goods {
    display: flex;
    padding: 20rpx 20rpx 20rpx 80rpx;
    border-radius: 10rpx;
    background-color: #fff;
    position: relative;

    .navigator {
      display: flex;
    }

    .checkbox {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 80rpx;
      height: 100%;

      &::before {
        content: '\e6cd';
        font-family: 'erabbit' !important;
        font-size: 40rpx;
        color: #444;
      }

      &.checked::before {
        content: '\e6cc';
        color: #27ba9b;
      }
    }

    .picture {
      width: 170rpx;
      height: 170rpx;
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20rpx;
    }

    .name {
      height: 72rpx;
      font-size: 26rpx;
      color: #444;
    }

    .attrsText {
      line-height: 1.8;
      padding: 0 15rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .price {
      line-height: 1;
      font-size: 26rpx;
      color: #444;
      margin-bottom: 2rpx;
      color: #cf4444;

      &::before {
        content: '￥';
        font-size: 80%;
      }
    }
    .count {
      position: absolute;
      bottom: 20rpx;
      right: 5rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 220rpx;
      height: 48rpx;
      .text {
        height: 100%;
        padding: 0 20rpx;
        font-size: 32rpx;
        color: #444;
      }
      .input {
        height: 100%;
        text-align: center;
        border-radius: 4rpx;
        font-size: 24rpx;
        color: #444;
        background-color: #f6f6f6;
      }
    }
  }
  .cart-swipe {
    display: block;
    margin: 20rpx 0;
  }
  .cart-swipe-right {
    display: flex;
    height: 100%;
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      padding: 6px;
      line-height: 1.5;
      color: #fff;
      font-size: 26rpx;
      border-radius: 0;
    }
    .delete-button {
      background-color: #cf4444;
    }
  }
}
.cart-blank,
.login-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  .image {
    width: 200rpx;
    height: 200rpx;
  }
  .text {
    color: #444;
    font-size: 26rpx;
    margin: 20rpx 0;
  }
  .button {
    width: 240rpx !important;
    height: 60rpx;
    line-height: 60rpx;
    margin-top: 20rpx;
    font-size: 26rpx;
    border-radius: 60rpx;
    color: #fff;
    background-color: #c03e46;
  }
}
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(var(--window-bottom));
  z-index: 1;
  height: 100rpx;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx solid #ededed;
  border-bottom: 1rpx solid #ededed;
  background-color: #fff;
  .all {
    margin-left: 25rpx;
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
  }
  .all::before {
    font-family: 'erabbit' !important;
    content: '\e6cd';
    font-size: 40rpx;
    margin-right: 8rpx;
  }

  .checked::before {
    content: '\e6cc';
    color: #27ba9b;
  }
  .text {
    margin-right: 8rpx;
    margin-left: 32rpx;
    color: #444;
    font-size: 18rpx;
  }
  .amount {
    font-size: 20rpx;
    color: #cf4444;

    .decimal {
      font-size: 18px;
    }

    &::before {
      content: '￥';
      font-size: 12px;
    }
  }
  .button-group {
    position: absolute;
    right: 10rpx;
    top: 50%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 72rpx;
    font-size: 13px;
    color: #fff;
    transform: translateY(-50%);
    .button {
      width: 240rpx;
      margin: 0 10rpx;
      border-radius: 72rpx;
    }
    .payment-button {
      background-color: #c03e46;

      &.disabled {
        opacity: 0.6;
      }
    }
  }
}
.toolbar-height {
  height: 100rpx;
}
</style>
