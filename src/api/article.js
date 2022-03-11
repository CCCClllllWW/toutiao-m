import request from '@/utils/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/v1_0/articles',
    // params 选项用来配置 Query 参数
    params
  })
}
