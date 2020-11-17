﻿const pxtorem = require("postcss-pxtorem");
const { resolve } = require("path");
module.exports = {
  lintOnSave: false, // 干掉eslint 语法检查
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.16.22:4000",
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {
          //重写路径（不用管）
          "^/api": "",
        },
      },
    },
  },
};
