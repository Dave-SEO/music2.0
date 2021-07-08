import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 引入全局样式
import '@/assets/scss/index.scss'
createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
