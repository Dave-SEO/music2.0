// 引入全局样式
import '@/assets/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'
import goBack from '@/components/base/goback/directive'
createApp(App)
.use(router)
.use(lazyPlugin, {
//   loading: 'loading.png',
//   error: 'error.png'
})
.directive('loading',loadingDirective)
.directive('goBack', goBack)
.use(createPinia())
.mount('#app')
