<template>
  <div class="channel-edit">
    <van-cell :border="false">
      <div slot="title" class="title-text">我的频道</div>
      <van-button
      class="edit-btn"
      size="mini"
      round
      type="danger"
      plain
      @click="isEdit  = !isEdit"
      >编辑</van-button
      >
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in myChannels"
        :key="index"
      >
      <van-icon
      v-show="isEdit"
      slot="icon"
      name="clear"
      ></van-icon>
        <span class="text" slot="text" :class="{ active: active === index }">{{
          channel.name
        }}</span>
      </van-grid-item>
    </van-grid>
    <van-cell :border="false">
      <div
      slot="title"
      class="title-text"
      >频道推荐</div>
    </van-cell>
    <van-grid class="recommend-grid" :gutter="10" clickable>
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in recommendChannels"
        :key="index"
        icon="plus"
        :text="channel.name"
        @click="onAddChannel(channel)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels } from '@/api/channel'

export default {
  name: 'ChannelEdit',
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  components: {},
  data () {
    return {
      allChannels: [],
      MyChannels: this.myChannels,
      isEdit: false
    }
  },
  computed: {
    recommendChannels () {
      return this.allChannels.filter(channel => {
        return !this.myChannels.find(myChannel => {
          return myChannel.id === channel.id
        })
        // return !mychannel
      })
    }
  },
  watch: {},
  created () {
    this.loadAllChannels()
  },
  mounted () {},
  methods: {
    // 加载所有频道
    async loadAllChannels () {
      try {
        const { data } = await getAllChannels()
        this.allChannels = data.data.channels
      } catch (err) {
        this.$toast('获取频道列表数据失败')
      }
    },
    onAddChannel (channel) {
      this.MyChannels.push(channel)
    }
    // onMyChannelClick (channelItem , index) {
    //   if (this.isEdit) {

    //   }
    // }
  }
}
</script>

<style scoped lang="less">
.channel-edit {
  padding: 85px 0;
  .title-text {
    font-size: 32px;
    color: #333333;
  }

  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }

  /deep/ .grid-item {
    width: 160px;
    height: 86px;
    .van-grid-item__content {
      white-space: nowrap;
      background-color: #f4f5f6;
      .van-grid-item__text,
      .text {
        font-size: 28px;
        color: #222;
        margin-top: 0;
      }
      .active {
        color: red;
      }
      .van-grid-item__icon-wrapper {
        position: unset;
      }
    }
  }
  /deep/ .my-grid {
    .grid-item {
      .van-icon-clear {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 30px;
        color: #cacaca;
        z-index: 2;
      }
    }
  }
  /deep/ .recommend-grid {
    .grid-item {
      .van-grid-item__content {
        flex-direction: row;
        .van-icon {
          font-size: 28px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
