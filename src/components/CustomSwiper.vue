<script setup lang="ts">
import type { BannerItem } from '@/services/home'
import { ref } from 'vue'

const { list } = defineProps<{ list: BannerItem[] }>()
const current = ref(0)
const onChange: UniHelper.SwiperOnChange = (e) => {
  current.value = e.detail.current
}
</script>
<template>
  <view class="wrapper">
    <swiper
      class="swiper"
      circular
      autoplay
      indicator-dots
      :interval="3000"
      :duration="1000"
      @change="onChange"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
.wrapper {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
