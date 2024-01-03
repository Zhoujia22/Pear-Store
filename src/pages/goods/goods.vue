<script setup lang="ts">
import { getGoodsByIdAPI, type GoodsResult } from '@/services/goods'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import AddressPanel from '@/pages/goods/components/AddressPanel.vue'
import ServicePanel from './components/ServicePanel.vue'
import type {
  SkuPopupEvent,
  SkuPopupInstance,
  SkuPopupLocaldata,
} from '@/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup'
import { computed } from 'vue'
import { postMemberCartAPI } from '@/services/cart'

type popopFollow = 'top' | 'center' | 'bottom' | 'left' | 'right' | 'message' | 'dialog' | 'share'

const { safeAreaInsets } = uni.getSystemInfoSync()

const query = defineProps<{
  id: string
}>()

const localdata = ref({} as SkuPopupLocaldata)
const isShowSku = ref(false)
const goods = ref<GoodsResult>()
const getGoodsByData = async () => {
  const response = await getGoodsByIdAPI(query.id)
  goods.value = response.result
  console.log(response)
  localdata.value = {
    _id: response.result.id,
    name: response.result.name,
    goods_thumb: response.result.mainPictures[0],
    spec_list: response.result.specs.map((item) => {
      return {
        name: item.name,
        list: item.values,
      }
    }),
    sku_list: response.result.skus.map((item) => {
      return {
        _id: item.id,
        goods_id: response.result.id,
        goods_name: response.result.name,
        image: item.picture,
        price: item.price * 100,
        stock: item.inventory,
        sku_name_arr: item.specs.map((v) => v.valueName),
      }
    }),
  }
}
const currentIndex = ref(0)
const onChange: UniHelper.SwiperOnChange = (e) => {
  currentIndex.value = e.detail.current
}
const onTapImage = (current: string, urls: string[]) => {
  uni.previewImage({
    urls,
    current,
  })
}
const popup = ref<{
  open: (type: popopFollow) => void
  close: () => void
}>()
const popupName = ref<'address' | 'service'>()
const openPopup = (name: typeof popupName.value) => {
  popupName.value = name
  popup.value?.open('bottom')
}

enum SkuMode {
  Both = 1,
  Cart = 2,
  Buy = 3,
}

const mode = ref<SkuMode>(SkuMode.Cart)

const openSkuPopup = (value: SkuMode) => {
  isShowSku.value = true
  mode.value = value
}

const skuPopupRef = ref<SkuPopupInstance>()

const selectArrText = computed(
  () => skuPopupRef.value?.selectArr?.join(' ').trim() || '请选择商品规格',
)

const onAddCart = async (e: SkuPopupEvent) => {
  await postMemberCartAPI({ skuId: e._id, count: e.buy_num })
  uni.showToast({ title: '添加成功' })
  isShowSku.value = false
}
onLoad(() => {
  getGoodsByData()
})
</script>

<template>
  <view class="wrapper">
    <vk-data-goods-sku-popup
      ref="skuPopupRef"
      v-model="isShowSku"
      :localdata="localdata"
      :mode="mode"
      add-cart-background-color="#FFA868"
      buy-now-background-color="#f34c54"
      :actived-style="{
        color: '#c03e46',
        borderColor: '#b03040',
        backgroundColor: '#c03e4613',
      }"
      @add-cart="onAddCart"
    />
    <scroll-view scroll-y class="viewport">
      <view class="goods">
        <view class="preview">
          <swiper circular @change="onChange">
            <swiper-item v-for="item in goods?.mainPictures" :key="item">
              <image mode="aspectFill" :src="item" @tap="onTapImage(item, goods!.mainPictures)" />
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current">{{ currentIndex + 1 }}</text>
            <text class="split">/</text>
            <text class="total">{{ goods?.mainPictures.length }}</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods?.price }}</text>
          </view>
          <view class="name ellipsis">{{ goods?.name }}</view>
          <view class="desc"> {{ goods?.desc }}</view>
        </view>

        <view class="action">
          <view class="item arrow" @tap="openSkuPopup(SkuMode.Both)">
            <text class="label">选择</text>
            <text class="text ellipsis">{{ selectArrText }}</text>
          </view>
          <view class="item arrow" @tap="openPopup('address')">
            <text class="label">送至</text>
            <text class="text ellipsis">北京市顺义区京顺路9号黑马程序员</text>
          </view>
          <view class="item arrow" @tap="openPopup('service')">
            <text class="label">服务</text>
            <text class="text ellipsis">无忧退 快速退款 免费包邮</text>
          </view>
        </view>
      </view>
      <view class="detail panel">
        <view class="title">
          <text>详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item" v-for="item in goods?.details.properties" :key="item.name">
              <text class="label">{{ item.name }}</text>
              <text class="value">{{ item.value }}</text>
            </view>
          </view>
          <image v-for="item in goods?.details.pictures" :key="item" mode="widthFix" :src="item">
          </image>
        </view>
      </view>
      <view class="similar panel">
        <view class="title">
          <text>同类推荐</text>
        </view>
        <view class="content">
          <navigator
            v-for="item in goods?.similarProducts"
            :key="item.id"
            class="goods"
            hover-class="none"
            :url="`/pages/goods/goods?id=${item.id}`"
          >
            <image class="image" mode="aspectFill" :src="item.picture"></image>
            <view class="name ellipsis">{{ item.name }}</view>
            <view class="price">
              <text class="symbol">¥</text>
              <text class="number">{{ item.price }}</text>
            </view>
          </navigator>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      <view class="icons">
        <button class="icons-button"><text class="icon-heart"></text>收藏</button>
        <button class="icons-button" open-type="contact">
          <text class="icon-handset"></text>客服
        </button>
        <navigator class="icons-button" url="/pages/cart/cartPage" open-type="navigate">
          <text class="icon-cart"></text>购物车</navigator
        >
      </view>
      <view class="buttons">
        <view class="addcart" @tap="openSkuPopup(SkuMode.Cart)"> 加入购物车 </view>
        <view class="payment" @tap="openSkuPopup(SkuMode.Buy)"> 立即购买 </view>
      </view>
    </view>
    <uni-popup ref="popup" background-color="#fff">
      <AddressPanel v-if="popupName === 'address'" @close="popup?.close()" />
      <ServicePanel v-if="popupName === 'service'" @close="popup?.close()" />
      <button hover-class="button-hover" @tap="popup?.close()">点击关闭</button>
    </uni-popup>
  </view>
</template>

<style lang="scss">
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .viewport {
    background-color: #f4f4f4;
    .goods {
      background-color: #fff;
      .preview {
        height: 750rpx;
        position: relative;
        .indicator {
          position: absolute;
          bottom: 30rpx;
          right: 30rpx;
          height: 40rpx;
          padding: 0 24rpx;
          line-height: 40rpx;
          border-radius: 30rpx;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          background-color: rgba(0, 0, 0, 0.3);
          .current {
            font-size: 26rpx;
          }
          .split {
            font-size: 24rpx;
            margin: 0 1rpx 0 2rpx;
          }
          .total {
            font-size: 24rpx;
          }
        }
      }
      .meta {
        position: relative;
        .price {
          height: 130rpx;
          padding: 25rpx 30rpx 0;
          color: #fff;
          font-size: 34rpx;
          background-color: #f34c54;
        }
        .number {
          font-size: 56rpx;
        }
        .name {
          max-height: 88rpx;
          line-height: 1.4;
          margin: 20rpx;
          font-size: 32rpx;
          color: #333;
        }
        .desc {
          line-height: 1;
          padding: 0 20rpx 30rpx;
          font-size: 24rpx;
          color: #cf4444;
        }
      }
      .action {
        padding-left: 20rpx;
        .item {
          height: 90rpx;
          padding-right: 60rpx;
          border-bottom: 1rpx solid #eaeaea;
          font-size: 26rpx;
          color: #333;
          position: relative;
          display: flex;
          align-items: center;
          &:last-child {
            border-bottom: 0 none;
          }
        }
        .label {
          width: 60rpx;
          color: #898b94;
          margin: 0 16rpx 0 10rpx;
        }
        .text {
          flex: 1;
          -webkit-line-clamp: 1;
        }
      }
    }
    .detail {
      padding-left: 20rpx;
      .content {
        margin-left: -20rpx;
      }
      .properties {
        padding: 0 20rpx;
        margin-bottom: 30rpx;
        .item {
          display: flex;
          line-height: 2;
          padding: 10rpx;
          font-size: 26rpx;
          color: #333;
          border-bottom: 1rpx dashed #ccc;
        }
        .label {
          width: 200rpx;
        }
        .value {
          flex: 1;
        }
      }
    }
    .panel {
      margin-top: 20rpx;
      background-color: #fff;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90rpx;
        line-height: 1;
        padding: 30rpx 60rpx 30rpx 6rpx;
        position: relative;
        text {
          padding-left: 10rpx;
          font-size: 28rpx;
          color: #333;
          font-weight: 600;
          border-left: 4rpx solid#c03e46;
        }
        navigator {
          font-size: 24rpx;
          color: #666;
        }
      }
    }
    .arrow {
      &::after {
        position: absolute;
        top: 50%;
        right: 30rpx;
        content: '\e6c2';
        color: #ccc;
        font-family: 'erabbit' !important;
        font-size: 32rpx;
        transform: translateY(-50%);
      }
    }
    .similar {
      padding-left: 20rpx;
      .content {
        padding: 0 20rpx 20rpx;
        margin-left: -20rpx;
        border-color: #f4f4f4;
        overflow: hidden;
        navigator {
          width: 345rpx;
          padding: 24rpx 20rpx 20rpx;
          margin: 20rpx 20rpx 0 0;
          border-radius: 10rpx;
          background-color: #fff;
          float: left;
        }
        .image {
          height: 304rpx;
        }
        .name {
          height: 80rpx;
          margin: 10rpx 0;
          font-size: 26rpx;
          color: #262626;
        }
        .price {
          line-height: 1;
          font-size: 20rpx;
          color: #cf4444;
        }
        .number {
          font-size: 26rpx;
          margin-left: 2rpx;
        }
        navigator {
          &:nth-child(even) {
            margin-right: 0;
          }
        }
      }
    }
  }
  .toolbar {
    background-color: #fff;
    height: 100rpx;
    padding: 0 20rpx;
    border-top: 1rpx solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    .buttons {
      display: flex;
      & > view {
        width: 220rpx;
        text-align: center;
        line-height: 72rpx;
        font-size: 26rpx;
        color: #fff;
        border-radius: 72rpx;
      }
      .addcart {
        background-color: #00aeec;
      }
      .payment {
        background-color: #c03e46;
        margin-left: 20rpx;
      }
    }
    .icons {
      padding-right: 10rpx;
      display: flex;
      align-items: center;
      flex: 1;
      .icons-button {
        flex: 1;
        text-align: center;
        line-height: 1.4;
        padding: 0;
        margin: 0;
        border-radius: 0;
        font-size: 20rpx;
        color: #333;
        background-color: #fff;
      }
      text {
        display: block;
        font-size: 34rpx;
      }
    }
  }
}
</style>
