/*
 * @Author: yangking yangkingg@163.com
 * @Date: 2022-08-17 09:58:32
 * @LastEditors: yangking yangkingg@163.com
 * @LastEditTime: 2022-08-17 10:00:23
 * @FilePath: \video-web\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by yangking yangkingg@163.com, All Rights Reserved. 
 */
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    open: true,
    host: true,
    proxy: {
      //配置跨域
      "^/api": {
        target: "http://192.168.2.167:9527", //这里后台的地址模拟的;应该填写你们真实的后台接口http://192.168.2.167:8085  164
        ws: true,
        changeOrigin: true, //允许跨域
        rewrite: path => path.replace(/^\/api/, "")
      },
    }
  },
})
