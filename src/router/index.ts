/*
 * @Author: yangking yangkingg@163.com
 * @Date: 2022-08-17 10:12:34
 * @LastEditors: yangking yangkingg@163.com
 * @LastEditTime: 2022-08-17 11:52:16
 * @FilePath: \video-web\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by yangking yangkingg@163.com, All Rights Reserved.
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/crud",
    component: () => import("../pages/crud.vue")
  },
  {
    path: "/",
    component: () => import("../pages/home.vue")
  }
]

const route = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default route
