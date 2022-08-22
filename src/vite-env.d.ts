/*
 * @Author: yangking yangkingg@163.com
 * @Date: 2022-08-17 09:58:32
 * @LastEditors: yangking yangkingg@163.com
 * @LastEditTime: 2022-08-18 10:49:40
 * @FilePath: \video-web\src\vite-env.d.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by yangking yangkingg@163.com, All Rights Reserved. 
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

