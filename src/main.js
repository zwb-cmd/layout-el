import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'


const app = createApp(App)
// 使用图标
for (const name in ElIcons) {
  app.component(name, ElIcons[name])
}
app.use(ElementPlus)
app.use(router)











app.mount('#app')
