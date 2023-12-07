<template name="skeleton">
  <scroll-view
    :refresher-enabled="true"
    :scroll-y="true"
    class="scroll-view"
    :enable-back-to-top="true"
  >
    <view is="components/NoticeBar">
      <view class="wrapper NoticeBar--wrapper data-v-9f486f7c NoticeBar--data-v-9f486f7c">
        <view
          is="node-modules/@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar"
          class="data-v-9f486f7c NoticeBar--data-v-9f486f7c"
        >
          <view
            class="uni-noticebar bar--uni-noticebar data-v-e94d5e72 bar--data-v-e94d5e72"
            style="background-color: #fff9ea"
          >
            <view
              is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"
              class="uni-noticebar-icon bar--uni-noticebar-icon data-v-e94d5e72 bar--data-v-e94d5e72"
            >
              <text
                class="uni-icons icons--uni-icons uniui-sound icons--uniui-sound sk-pseudo sk-pseudo-circle"
                style="color: #ff9a43; font-size: 21px"
              ></text>
            </view>
            <view
              class="uni-noticebar__content-wrapper bar--uni-noticebar__content-wrapper data-v-e94d5e72 bar--data-v-e94d5e72 uni-noticebar__content-wrapper--scrollable bar--uni-noticebar__content-wrapper--scrollable"
              style="height: 21px"
            >
              <view
                class="uni-noticebar__content bar--uni-noticebar__content data-v-e94d5e72 bar--data-v-e94d5e72 uni-noticebar__content--scrollable bar--uni-noticebar__content--scrollable"
                id="632c9099--Uni_5cu6"
              >
                <text
                  class="uni-noticebar__content-text bar--uni-noticebar__content-text data-v-e94d5e72 bar--data-v-e94d5e72 uni-noticebar__content-text--scrollable bar--uni-noticebar__content-text--scrollable sk-transparent sk-text-16-6667-679 sk-text"
                  id="632c9099--Uni_itix"
                  style="
                    color: #ff9a43;
                    font-size: 14px;
                    line-height: 21px;
                    width: px;
                    animation-duration: 20.52425048828125s;
                    -webkit-animation-duration: 20.52425048828125s;
                    animation-play-state: running;
                    -webkit-animation-play-state: running;
                    animation-delay: -7.607999877929688s;
                    -webkit-animation-delay: -7.607999877929688s;
                  "
                  >🎄圣诞狂欢，大放送！🎁
                  抢购即享折上95折，满300元再减30元！限时3天，快来享受节日特惠！🛍️✨</text
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view is="components/CustomSwiper">
      <view class="wrapper CustomSwiper--wrapper">
        <swiper
          :autoplay="false"
          :circular="true"
          :indicator-dots="true"
          class="swiper CustomSwiper--swiper"
          :duration="1000"
          :interval="3000"
          :current="0"
        >
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator CustomSwiper--navigator" hover-class="none">
              <image class="image CustomSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(-100%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator CustomSwiper--navigator" hover-class="none">
              <image class="image CustomSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view is="components/CategoryPanel">
      <view class="wrapper CategoryPanel--wrapper data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb">
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-172 sk-text"
              >居家</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-557 sk-text"
              >锦鲤</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-122 sk-text"
              >服饰</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-419 sk-text"
              >母婴</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-226 sk-text"
              >个护</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-457 sk-text"
              >严选</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-389 sk-text"
              >数码</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-567 sk-text"
              >运动</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-227 sk-text"
              >杂项</text
            >
          </view>
        </navigator>
        <navigator
          class="data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          hover-class="navigator-hover"
        >
          <view
            class="category CategoryPanel--category data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb"
          >
            <image
              class="image CategoryPanel--image data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-image"
            ></image>
            <text
              class="title CategoryPanel--title data-v-d6ccfacb CategoryPanel--data-v-d6ccfacb sk-transparent sk-text-14-2857-157 sk-text"
              >品牌</text
            >
          </view>
        </navigator>
      </view>
    </view>
    <view is="components/HotPanel">
      <view class="wrapper HotPanel--wrapper data-v-79e1131b HotPanel--data-v-79e1131b">
        <view class="proposeItem HotPanel--proposeItem data-v-79e1131b HotPanel--data-v-79e1131b">
          <view class="title HotPanel--title data-v-79e1131b HotPanel--data-v-79e1131b">
            <text
              class="title-text HotPanel--title-text data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-651 sk-text"
              >特惠推荐</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-105 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-79e1131b HotPanel--data-v-79e1131b"
            hover-class="navigator-hover"
            open-type="navigate"
          >
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="proposeItem HotPanel--proposeItem data-v-79e1131b HotPanel--data-v-79e1131b">
          <view class="title HotPanel--title data-v-79e1131b HotPanel--data-v-79e1131b">
            <text
              class="title-text HotPanel--title-text data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-931 sk-text"
              >爆款推荐</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-427 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-79e1131b HotPanel--data-v-79e1131b"
            hover-class="navigator-hover"
            open-type="navigate"
          >
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="proposeItem HotPanel--proposeItem data-v-79e1131b HotPanel--data-v-79e1131b">
          <view class="title HotPanel--title data-v-79e1131b HotPanel--data-v-79e1131b">
            <text
              class="title-text HotPanel--title-text data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-530 sk-text"
              >一站买全</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-135 sk-text"
              >精心优选</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-79e1131b HotPanel--data-v-79e1131b"
            hover-class="navigator-hover"
            open-type="navigate"
          >
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="proposeItem HotPanel--proposeItem data-v-79e1131b HotPanel--data-v-79e1131b">
          <view class="title HotPanel--title data-v-79e1131b HotPanel--data-v-79e1131b">
            <text
              class="title-text HotPanel--title-text data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-814 sk-text"
              >新鲜好物</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-79e1131b HotPanel--data-v-79e1131b sk-transparent sk-text-14-2857-575 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-79e1131b HotPanel--data-v-79e1131b"
            hover-class="navigator-hover"
            open-type="navigate"
          >
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-79e1131b HotPanel--data-v-79e1131b sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/Guess" class="r">
      <view class="wrapper Guess--wrapper data-v-b4c05f92 Guess--data-v-b4c05f92">
        <view
          class="caption Guess--caption data-v-b4c05f92 Guess--data-v-b4c05f92 sk-pseudo sk-pseudo-circle"
        >
          <view
            is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"
            class="icon Guess--icon data-v-b4c05f92 Guess--data-v-b4c05f92"
          >
            <text
              class="uni-icons icons--uni-icons uniui-fire icons--uniui-fire sk-pseudo sk-pseudo-circle"
              style="color: #c03e46; font-size: 30px"
            ></text>
          </view>
          <view
            class="text Guess--text data-v-b4c05f92 Guess--data-v-b4c05f92 sk-transparent sk-text-0-0000-76 sk-text"
            >精选推荐</view
          >
        </view>
      </view>
    </view>
  </scroll-view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2023/12/7下午7:05:16

在 D:\xtx\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-999 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.8605rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-297 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.8605rpx;
  position: relative !important;
}
.sk-text-14-2857-348 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.8605rpx;
  position: relative !important;
}
.sk-text-16-6667-679 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 36.6279rpx;
  position: absolute !important;
}
.sk-text-14-2857-172 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-557 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-122 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-419 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-226 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-457 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-389 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-567 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-227 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-157 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-651 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-105 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-931 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-427 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-530 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-135 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-814 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-575 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-0-0000-76 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.3953rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
