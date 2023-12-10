<script setup lang="ts">
import CustomSwiper from '@/components/CustomSwiper.vue'
import { getHomeBannerAPI, type BannerItem } from '@/services/home'
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getCategoryTopAPI, type CategoryTopItem } from '@/services/category'

const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const response = await getHomeBannerAPI(2)
  bannerList.value = response.result
}
const categoryList = ref<CategoryTopItem[]>([])
const activeIndex = ref(0)
const getCategoryTopData = async () => {
  const response = await getCategoryTopAPI()
  categoryList.value = response.result
}
const subCategoryList = computed(() => categoryList.value[activeIndex.value]?.children || [])

onLoad(() => {
  getBannerData()
  getCategoryTopData()
})
</script>

<template>
  <view class="wrapper">
    <view class="form">
      <scroll-view scroll-y class="scroll-view">
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          :class="{ active: activeIndex === index }"
          @tap="activeIndex = index"
          >{{ item.name }}
        </view>
      </scroll-view>
    </view>
    <view class="content">
      <custom-swiper class="banner" :list="bannerList" />
      <view class="panel" v-for="item in subCategoryList" :key="item.id">
        <view class="title">
          <text class="name">{{ item.name }}</text>
        </view>
        <view class="section">
          <navigator
            :url="`/pages/goods/goods?id=${good.id}`"
            class="goods"
            open-type="navigate"
            hover-class="navigator-hover"
            v-for="good in item.goods"
            :key="good.id"
          >
            <image :src="good.picture" mode="scaleToFill" class="image" />
            <view class="name">{{ good.name }}</view>
            <view class="price">
              <text class="symbol">¥</text>
              <text class="number">{{ good.price }}</text>
            </view>
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
  .form {
    .scroll-view {
      width: 180rpx;
      background-color: #f6f6f6;
      .item {
        height: 96rpx;
        text-align: center;
        line-height: 96rpx;
        font-size: 26rpx;
        color: #595c63;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 42rpx;
          bottom: 0;
          width: 96rpx;
          border-top: 1rpx solid #e3e4e7;
        }
      }
      .active {
        background-color: #fff;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 8rpx;
          height: 100%;
          background-color: #c03e46;
        }
      }
    }
  }
  .form .item:last-child::after,
  .form .active::after {
    display: none;
  }
  .content {
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    .panel {
      margin: 0 30rpx 0rpx;
    }
    .title {
      height: 60rpx;
      line-height: 60rpx;
      color: #333;
      font-size: 28rpx;
      border-bottom: 1rpx solid #f7f7f8;
      .more {
        float: right;
        padding-left: 20rpx;
        font-size: 24rpx;
        color: #999;
      }
    }
    .more {
      &::after {
        font-family: 'erabbit' !important;
        content: '\e6c2';
      }
    }
    .section {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 20rpx 0;
      .goods {
        width: 150rpx;
        margin: 0rpx 30rpx 20rpx 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
        image {
          width: 150rpx;
          height: 150rpx;
        }
        .name {
          padding: 5rpx;
          font-size: 22rpx;
          color: #333;
        }
        .price {
          padding: 5rpx;
          font-size: 18rpx;
        }
        .number {
          color: #cf4444;
          font-size: 24rpx;
          margin-left: 2rpx;
        }
      }
    }
  }
}
</style>
