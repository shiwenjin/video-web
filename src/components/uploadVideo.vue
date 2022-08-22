<!--
 * @Author: YangKing yangkingg@163.com
 * @Date: 2022-08-18 10:20:53
 * @LastEditors: yangking
 * @LastEditTime: 2022-08-18 17:23:45
 * @FilePath: \video-web\src\components\uploadVideo.vue
 * @Description:
 *
 * Copyright (c) 2022 by YangKing yangkingg@163.com, All Rights Reserved.
-->

<script lang="ts" setup>
import { uploadVideo } from "../api/video";
import FormData from "form-data";
import { reactive, ref } from "vue";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";

import type { UploadFile } from "element-plus";

const props = defineProps<{ status: { status: Boolean } }>();

let videoInfo = reactive<{
  category: string;
  title: string;
  coverPath: string;
  videoPath: string;
}>({
  category: "",
  title: "",
  coverPath: "",
  videoPath: "",
});

const beforeVideoUpload = (file: any) => {
};

const multipartUpload = async (a: any) => {
  console.log(a);
  const data = new FormData();
  data.append("file", a.file);
  let res = await uploadVideo(data);
  console.log(res);
};

// 关闭
const emits = defineEmits<{ (e: "close"): void }>();
const close = () => {
  emits("close");
};

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};
</script>

<template>
  <el-dialog
      v-model="props.status.status"
      title="上传视频"
      width="800px"
      @close="close"
  >
    <el-form :model="videoInfo" label-position="right" label-width="100px">
      <el-form-item label="类别">
        <el-input v-model="videoInfo.category"/>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="videoInfo.title"/>
      </el-form-item>
      <el-form-item label="上传封面">
        <el-upload
            :auto-upload="false"
            :before-upload="beforeVideoUpload"
            :http-request="multipartUpload"
            class="upload-demo"
            list-type="picture-card"
            multiple
        >
          <el-icon>
            <Plus/>
          </el-icon>

          <template #file="{ file }">
            <div>
              <img
                  :src="file.url"
                  alt=""
                  class="el-upload-list__item-thumbnail"
              />
              <span class="el-upload-list__item-actions">
                <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                >
                  <el-icon><zoom-in/></el-icon>
                </span>
                <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                >
                  <el-icon><Download/></el-icon>
                </span>
                <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                >
                  <el-icon><Delete/></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog v-model="dialogVisible">
    <img :src="dialogImageUrl" alt="Preview Image" class="dialog-image"/>
  </el-dialog>
</template>

<style scoped>
.dialog-image {
  width: 100%;
}
</style>
