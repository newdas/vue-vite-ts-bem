import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import 'normalize.css/normalize.css'
import '@/style/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
