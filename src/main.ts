// 引入全局样式
import '@/assets/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'
import goBack from '@/components/base/goback/directive'
import noResult from '@/components/base/no-result/directive'
createApp(App)
.use(router)
.use(lazyPlugin, {
//   loading: 'loading.png',
//   error: 'error.png'
})
.directive('loading',loadingDirective)
.directive('goBack', goBack)
.directive('no-result', noResult)
.use(createPinia())
.mount('#app')
