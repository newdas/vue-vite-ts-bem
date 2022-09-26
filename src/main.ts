import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import 'normalize.css/normalize.css'
import '@/style/index.scss'
import components from '@/components/index'

const app = createApp(App)
app.use(router)
app.use(components)
app.mount('#app')
