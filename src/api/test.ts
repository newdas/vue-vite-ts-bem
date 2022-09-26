import request from '@/utils/request'

/**
 * 获取直播列表
 */
export const getTestItems = () => {
  return request({
    url: '/test/items',
    method: 'get',
  })

}
