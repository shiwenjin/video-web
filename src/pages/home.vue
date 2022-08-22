<!--
 * @Author: yangking
 * @Date: 2022-08-17 13:52:58
 * @LastEditors: yangking
 * @LastEditTime: 2022-08-18 16:48:52
 * @FilePath: \video-web\src\pages\home.vue
 * @Description:
 *
 * Copyright (c) 2022 by yangking yangkingg@163.com, All Rights Reserved.
-->
<script lang="ts" setup>
import { ref } from "vue";

import { Vue3EasySwiper } from "vue3-easy-swiper";
import "vue3-easy-swiper/dist/style.css";
import { getInfo, Record } from "../api/video";

const list = [
  {
    url: "https://pic50.photophoto.cn/20190304/0020033091356105_b.jpg",
    title: "听党指挥",
  },
  {
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fres.meizhou.cn%2Fa%2F10001%2F201808%2Fd41bb53fbb9baf204faae702302a0228.jpeg&refer=http%3A%2F%2Fres.meizhou.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663223427&t=f2c523ac7b5308c678bcec0854e85032",
    title: "忠诚于党",
  },
];

const activeIndex = ref<string>("0");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

let videos = ref<Record[]>();

// 获取数据
const getPages = async () => {
  let result = await getInfo();
  if (result) {
    videos.value = result.data?.records;
  }
};

const play = (video: Record) => {
  window.open("api/static" + video.videoPath);
};
getPages();
</script>

<template>
  <div id="home-body">
    <el-affix class="header">
      <el-menu
        :default-active="activeIndex"
        :ellipsis="false"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="0">学习强国</el-menu-item>
        <el-menu-item index="1">听党指挥</el-menu-item>
        <el-menu-item index="2">能打胜仗</el-menu-item>
      </el-menu>
    </el-affix>

    <vue3-easy-swiper
      :list="list"
      style="width: 1000px; height: 450px; margin: auto"
    >
      <template #swiperItem="{ item }">
        <img :src="item.url" alt="" style="width: 100%; height: 100%" />
      </template>
    </vue3-easy-swiper>

    <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 20px">
      <el-col
        v-for="video in videos"
        :key="video.id"
        :span="6"
        style="margin-top: 20px"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'api/static' + video.coverPath" class="image" />
          <span class="js_start_play" @click="play(video)"></span>

          <div style="padding: 14px">
            <span>{{ video.title }}</span>
            <div class="bottom">
              <time class="time">{{ video.createdAt }}</time>
              <el-button class="button" text @click="play(video)"
                >播放</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-backtop :bottom="100" :right="100" />
  </div>
</template>

<style lang="scss">
#home-body {
  max-width: 1280px;
  margin: 0 auto;

  .header {
    margin-bottom: 15px;

    ul {
      border: none;
    }
  }

  .time {
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
    height: 300px;
  }

  .el-card__body > span {
    content: "";
    position: absolute;
    width: 47px;
    height: 47px;
    margin-top: -13%;
    margin-left: 9%;
    background: url(../assets/play.svg) no-repeat;
    background-size: contain;
    cursor: pointer;
  }
}
</style>
