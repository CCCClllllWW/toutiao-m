import Vue from 'vue'
import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs.locale('zh-cn')

// console.log(dayjs().format('YYYY-MM-DD'))

Vue.filter('relativeTime', value => {
  return dayjs().to(dayjs(value))
})
