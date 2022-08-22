/*
 * @Author: yangking
 * @Date: 2022-08-17 09:58:32
 * @LastEditors: yangking
 * @LastEditTime: 2022-08-18 17:03:23
 * @FilePath: \video-web\src\api\video.ts
 * @Description:
 *
 * Copyright (c) 2022 by yangking yangkingg@163.com, All Rights Reserved.
 */
import http from "../utils/request";

export interface Record {
  id: number;
  createdAt: string;
  updatedAt: string;
  category: string;
  title: string;
  coverPath: string;
  videoPath: string;
  summary: string;
  playsNum: string;
  videoDuration: string;
  videoSize: string;
}

export interface Result {
  records: Record[];
  total: number;
  size: number;
  current: number;
  orders: any[];
  optimizeCountSql: boolean;
  searchCount: boolean;
  countId: string;
  maxLimit: string;
  pages: number;
}

export const getInfo = () => http.get<Result>("/api/video/page");

export const uploadVideo = (params: any) => http.post("/api/upload", params);
