<template>
  <div class="floot">
    <router-link to="/"></router-link>
    <!-- <a href="https://www.popmart.com/home"></a> -->
    <div class="footer-con">
      <div class="footer-right-icon">
        <a href="https://wx.qq.com/" class="footer_icon1"> </a>
        <a href="https://passport.weibo.com/" class="footer_icon2"></a>
        <a
          href="https://www.instagram.com/popmartglobal/"
          class="footer_icon3"
        ></a>
        <a
          href="https://www.facebook.com/popmartglobal"
          class="footer_icon4"
        ></a>
        <a href="https://www.youtube.com/" class="footer_icon5"></a>
        <a href="https://twitter.com/POPMARTGlobal" class="footer_icon6"></a>
      </div>

      <!-- 加入我们 -->
      <div class="footer-con-box">
        <a href="##">加入我们</a>
        <i class="left"></i>
        <a href="##">联系我们</a>
      </div>
      <!-- 地址 -->
      <div class="footer-con-site">
        <div>
          北京市朝阳区望京东园四区 13号楼 -4 至 33 层 101 内 A 座 36 层 3606 室
        </div>
        <i class="left"></i>
        <div class="rigth">
          4000232233@POPMART.COM
        </div>
      </div>
      <div class="footer-con-site1">
        <div class="floot_floot">
          COPYRIGHT © 泡泡玛特 POPMART.COM ALL RIGHTS RESERVED
        </div>
        <i class="left"></i>
        <div class="rigth">
          京 ICP 备 11028233 号 - 3
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Floot",
};
</script>
<style scoped>
.floot {
  width: 100%;
  height: 214px;
  background: #383838;
  position: relative;
}
.floot > a {
  display: block;
  width: 111px;
  height: 35px;
  background: url("./images/header_logo.png") center no-repeat;
  background-size: 100%;
  position: absolute;
  left: 236px;
  top: 50px;
}
.floot .footer-con {
  width: 627px;
  height: 161px;
  position: absolute;
  top: 50px;
  left: 33%;
  overflow: hidden;
  /* background: pink; */
}
.floot .footer-con .footer-right-icon {
  width: 100%;
  height: 20px;
  float: left;
  /* background: red; */
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.floot .footer-con .footer-right-icon .footer_icon1 {
  width: 17px;
  height: 23px;
  display: block;
  background: url("./images/微信.png") no-repeat;
  background-size: 100%;
}
.floot .footer-con .footer_icon2 {
  width: 17px;
  height: 23px;
  display: block;
  float: left;
  background: url("./images/新浪.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 26px;
}
.floot .footer-con .footer_icon3 {
  width: 17px;
  height: 23px;
  display: block;
  float: left;
  background: url("./images/小照机.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 52px;
}
.floot .footer-con .footer_icon4 {
  width: 17px;
  height: 23px;
  display: block;
  float: left;
  background: url("./images/f.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 78px;
}
.floot .footer-con .footer_icon5 {
  width: 17px;
  height: 23px;
  display: block;
  float: left;
  background: url("./images/youto.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 104px;
}
.floot .footer-con .footer_icon6 {
  width: 17px;
  height: 23px;
  display: block;
  float: left;
  background: url("./images/小鸟.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 130px;
}
.floot .footer-con .footer-con-box {
  display: block;
  margin-top: 15px;
}
.floot .footer-con .footer-con-box .left {
  border-right: 1px solid #000;
  margin: 0 6px;
}
.floot .footer-con .footer-con-site {
  margin-top: 3px;
}
.floot .footer-con .footer-con-site .rigth {
  float: right;
  margin: -21px 14px 0 0;
}

.floot .footer-con .footer-con-site .left {
  border-right: 1px solid #000;
  position: relative;
  left: 420px;
  top: -21px;
}
.floot .footer-con .footer-con-site1 .floot_floot {
  margin-top: -18px;
}
.floot .footer-con .footer-con-site1 .left {
  border-right: 1px solid #000;
  position: relative;
  left: 380px;
  top: -21px;
}
.floot .footer-con .footer-con-site1 .rigth {
  float: right;
  margin: -21px 83px 0 0;
}
</style>
