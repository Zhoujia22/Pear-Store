<script setup lang="ts">
import {
  getMemberProfileAPI,
  putMemberProfileAPI,
  type ProfileDetail,
  type Gender,
} from '@/services/profile'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useMemberStore } from '@/stores'

const { safeAreaInsets } = uni.getSystemInfoSync()
let changeAvatarSwitch = false
const profile = ref({} as ProfileDetail)

const memberStore = useMemberStore()

const getMemberProfileData = async () => {
  const response = await getMemberProfileAPI()
  profile.value = response.result
}

const onAvatarChange = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (response) => {
      const { tempFilePath } = response.tempFiles[0]
      profile.value.avatar = tempFilePath
      changeAvatarSwitch = true
    },
  })
}

const onUploadAvatar = () => {
  uni.uploadFile({
    url: '/member/profile/avatar',
    name: 'file',
    filePath: profile.value.avatar,
    success: (response) => {
      if (response.statusCode === 200) {
        const avatar = JSON.parse(response.data).result.avatar
        profile.value.avatar = avatar
        memberStore.profile!.avatar = avatar
      } else {
        uni.showToast({ icon: 'error', title: '出现错误' })
      }
      changeAvatarSwitch = false
    },
  })
}

const onGenderChange: UniHelper.RadioGroupOnChange = (e) => {
  profile.value.gender = e.detail.value as Gender
}
const onBirthdayChange: UniHelper.DatePickerOnChange = (e) => {
  profile.value.birthday = e.detail.value
}
let fullLocationCode: [string, string, string] = ['', '', '']
const onFullLocationChange: UniHelper.RegionPickerOnChange = (e) => {
  profile.value.fullLocation = e.detail.value.join('')
  fullLocationCode = e.detail.code!
}

const onSubmit = async () => {
  if (changeAvatarSwitch) {
    onUploadAvatar()
  }
  const { nickname, gender, birthday } = profile.value
  const response = await putMemberProfileAPI({
    nickname,
    gender,
    birthday,
    provinceCode: fullLocationCode[0],
    cityCode: fullLocationCode[1],
    countyCode: fullLocationCode[2],
  })
  memberStore.profile!.nickname = response.result.nickname || '🦄'
  uni.showToast({ icon: 'success', title: '保存成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 400)
}

onLoad(() => {
  getMemberProfileData()
})
</script>
<template>
  <view class="viewport">
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <view class="avatar">
      <view class="avatar-content" @tap="onAvatarChange">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <view class="form">
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#333" :checked="profile?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#333" :checked="profile?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">出生</text>
          <picker
            class="picker"
            mode="date"
            :value="profile?.birthday"
            start="1900-01-01"
            :end="new Date()"
            @change="onBirthdayChange"
          >
            <view v-if="false">{{ profile?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            :value="profile?.fullLocation?.split(' ')"
            mode="region"
            @change="onFullLocationChange"
          >
            <view v-if="profile?.fullLocation">{{ profile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" :value="profile?.profession" />
        </view>
      </view>
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  height: 100vh;
}
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #333;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #333;
  }
}
</style>
