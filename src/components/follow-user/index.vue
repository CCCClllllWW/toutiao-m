<template>
  <div>
    <van-button
      v-if="isFollowed"
      :loading="loading"
      @click="onFollow"
      class="follow-btn"
      round
      size="small"
      >已关注</van-button
    >
    <van-button
      v-else
      :loading="loading"
      @click="onFollow"
      class="follow-btn"
      type="info"
      color="#3296fa"
      round
      size="small"
      icon="plus"
      >关注</van-button
    >
  </div>
</template>

<script>
import { addFollow, deleteFollow } from '@/api/user'

export default {
  name: 'FollowUser',
  components: {},
  model: {
    prop: 'isFollowed', // 默认是 value
    event: 'update-is_followed' // 默认是 input
  },
  props: {
    isFollowed: {
      type: Boolean,
      required: true
    },
    userId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onFollow () {
      this.loading = true
      try {
        if (this.isFollowed) {
          // 已关注 取消
          await deleteFollow(this.userId)
        } else {
          // 没有关注 添加
          await addFollow(this.userId)
        }
        // this.$emit('input', !this.isFollowed)
        this.$emit('update-is_followed', !this.isFollowed)
      } catch (err) {
        let message = '操作失败'
        if (err.response && err.response.status === 400) {
          message = '你不能关注自己'
        }
        this.$toast(message)
      }
      this.loading = false
    }
  }
}
</script>

<style scoped lang="less">
</style>
