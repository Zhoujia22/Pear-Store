<script setup lang="ts">
const props = defineProps({
  title: String,
  speed: Number,
})
</script>

<template>
  <view class="wrapper">
    <uni-notice-bar show-icon scrollable :speed="props.speed" :text="props.title" />
  </view>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 20rpx;
}
</style>
