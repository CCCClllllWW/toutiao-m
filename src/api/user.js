import request from '@/utils/request'
// import store from '@/store'

export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}

export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user'
  //   headers: {
  //     Authorization: `Bearer ${store.state.user.token}`
  //   }
  })
}

export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user/channels'
  })
}

/**
 * 关注用户
 */
export const addFollow = target => {
  return request({
    method: 'POST',
    url: '/v1_0/user/followings',
    data: {
      target
    }
  })
}
/**
 * 取消关注用户
 */
export const deleteFollow = target => {
  return request({
    method: 'DELETE',
    url: `/v1_0/user/followings/${target}`
  })
}

/**
 * 获取当前登录用户的个人资料
 */
export const getUserProfile = target => {
  return request({
    method: 'GET',
    url: '/v1_0/user/profile'
  })
}

/**
 * 更新用户资料
 */
export const updateUserProfile = data => {
  return request({
    method: 'PATCH',
    url: '/v1_0/user/profile',
    data
  })
}

/**
 * 更新用户照片资料
 */
export const updateUserPhoto = data => {
  return request({
    method: 'PATCH',
    url: '/v1_0/user/photo',
    data
  })
}
