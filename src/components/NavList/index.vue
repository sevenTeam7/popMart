<template>
  <div class="loader-container">
    <!-- 头部北京图片 -->
    <div class="header_bg">
      <div class="header">
        <router-link to="/"></router-link>
        <!-- <a href="###"></a> -->
        <div class="nav_con">
          <a href="https://www.popmart.com/home/about">关于我们</a>
          <router-link to="/news">新闻</router-link>
          <!-- <a href="###">新闻</a> -->
          <a href="###">附近门店</a>
          <a href="###">合作</a>
          <a href="###">葩趣</a>
          <router-link to="/shop"
            >线上商城<i class="el-icon-arrow-down"></i
          ></router-link>
          <!-- <a href="###">线上商城<i class="el-icon-arrow-down"></i></a> -->
          <a href="###">海上市场</a>
          <a href="###">海上平台<i class="el-icon-arrow-down"></i></a>
        </div>
        <div id="lang">
          <a href="###" class="active">简</a>
          <span class="line"></span>
          <a href="###">繁</a>
          <span class="line"></span>
          <a href="###">EN</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavList",
};
</script>
<style scoped>
.container-box {
  width: 100%;
}
/* 头部 */
.header {
  height: 55px;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: space-around;
  z-index: 3;
}
/* 头部的鼠标移入变色 */
.header:hover {
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 3);
}
/* 头部nav */
.header > a {
  display: block;
  background-size: 100%;
  width: 130px;
  height: 32px;
  line-height: 32px;
  position: relative;
  background: url("./images/header_logo.png") repeat center;
}

.header .nav_con > a {
  display: inline;
  line-height: 55px;
  padding: 0 22px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  font-family: "font-family";
}
.nav_con a:hover {
  text-decoration: underline;
  color: #f85000;
}
#lang > a {
  color: #fff;
  font-size: 13px;
  padding: 5px;
  /* border-right: 2px solid #fff; */
}
#lang .active {
  color: #feba0a;
}
#lang .line {
  width: 1px;
  height: 2px;
  border-right: 1px solid #fff;
  background: #fff;
  /* margin: 0 0 0 5px; */
}
</style>
