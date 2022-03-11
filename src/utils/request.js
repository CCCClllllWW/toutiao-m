import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/'
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  console.log(config)
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token} `
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default request
// // 基于 axios 封装的请求模块
// import ajax from 'axios'
// // 新建一个新的axios实例
// const axios = ajax.create({
//   baseURL: 'http://123.57.109.30:8000' // 基地址
// })

// // 导出自定义函数, 参数对象解构赋值
// export default ({ url, method = 'GET', params, data, headers }) => {
//   return axios({
//     url: url,
//     method: method,
//     params: params,
//     data: data,
//     headers: headers
//  })
// // 以后换库, 只需要改这里, 逻辑页面不用动, 保证代码的复用性和独立性(高内聚低耦合)
// //   return $.ajax({
// //     url: url,
// //     type: method,
// //     data: data,
// //     header: headers
// //   })
// }
