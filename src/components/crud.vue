<!--
 * @Author: yangking yangkingg@163.com
 * @Date: 2022-08-17 09:58:32
 * @LastEditors: yangking yangkingg@163.com
 * @LastEditTime: 2022-08-18 10:47:28
 * @FilePath: \video-web\src\components\crud.vue
 * @Description:
 *
 * Copyright (c) 2022 by yangking yangkingg@163.com, All Rights Reserved.
-->
<script lang="ts" setup>
import { reactive } from "vue";
import UploadVideo from "./uploadVideo.vue";

let videoInfo = reactive<object[]>([]);

let status = reactive<{ status: boolean }>({
  status: false,
});
const upload = async () => {
  status.status = true;

};

// 关闭
const close = () => {
  status.status = false;
};

</script>

<template>
  <el-button type="primary" @click="upload">上传视频</el-button>
  <el-table :data="videoInfo" style="width: 100%">
    <el-table-column label="类别" prop="date" width="180"/>
    <el-table-column label="标题" prop="name" width="180"/>
    <el-table-column label="封面" prop="address"/>
    <el-table-column label="视频" prop="address"/>
  </el-table>

  <UploadVideo :status="status" @close="close"/>
</template>

<style scoped></style>
