import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import registerRouter from './backend/router'
const express = require('express')
const app = express()

const myPlugin = (): PluginOption => ({
  name: "configure-server",
  configureServer() {
  //  registerRouter(app)
  }
})

export default defineConfig({
  server: {
    open: false,
    host: '0.0.0.0',
    port: 3002,
    proxy: {
      '/api': {
        target: 'http://ustbhuangyi.com/music-next/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
         @import "@/assets/scss/variable.scss";
         @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  plugins: [vue(), myPlugin()]
})
