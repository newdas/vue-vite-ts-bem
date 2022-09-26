import Mock from 'mockjs'

export default {
  // 获取直播列表
  getItems: (config: any) => {
    return Mock.mock({
      'data|10': [
        {
          name: '@cname',

        },
      ],
      status: 200,
      msg: '请求成功',
    })
  },

}
