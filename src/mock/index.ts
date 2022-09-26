import Mock from 'mockjs'
import test from './test'

Mock.setup({
  timeout: '300-600',
})

// mall 相关
Mock.mock('/api/test/items', 'get', test.getItems)

export default Mock
