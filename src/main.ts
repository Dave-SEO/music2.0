// 引入全局样式
import '@/assets/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
