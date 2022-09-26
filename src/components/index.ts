import Col from 'vant/lib/col'
import 'vant/lib/col/index.css'
import Row from 'vant/lib/row'
import 'vant/lib/row/index.css'
import { App } from 'vue'
import { Layout, Header, Aside, Content, Footer } from './layout'
import BoxCenter from './box-center/BoxCenter.vue'
import BoxSkin from './box-skin/BoxSkin.vue'
import SingleCenter from './single-center/SingleCenter.vue'
import Avatar from './avatar/Avatar.vue'
import Magazine from './magazine/Magazine.vue'
import FootNav from './foot-nav/FootNav.vue'

const components = {
  Row,
  Col,
  Layout,
  Header,
  Aside,
  Content,
  Footer,
  BoxCenter,
  BoxSkin,
  SingleCenter,
  Avatar,
  FootNav,
  Magazine,
}
export default {
  install(app: App) {
    // 此处形参为main.js文件中use()方法自动传进来的Vue实例
    Object.keys(components).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.component('C' + key, components[key])
    })
  },
}
