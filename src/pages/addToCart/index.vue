<template>
  <!-- 最外层盒子 -->
  <div class="main">
    <!-- 顶部盒子 -->
    <div class="success-wrap">
      <!-- 阴影盒子 -->
      <div class="w">
        <div class="success-cont">
          <!-- 中间商品区域 -->
          <div class="success-box">
            <!-- 顶部左部区域 -->
            <div class="success-lcol">
              <!-- 添加成功提示 -->
              <div class="success-top">
                <!-- 成功小图标 -->
                <b class="succ-icon"></b>
                <h3 class="succeed">商品已经成功加入购物车</h3>
              </div>
              <!-- 小图区域第一项 -->
              <div class="small-item">
                <!-- 顶部左边小图 -->
                <div class="small-img">
                  <a href="../addToCart/images/hangbao-03.png/"></a>
                </div>
                <!-- 小图配套信息 -->
                <div class="mini-info">
                  <div class="mini-name">
                    <a
                      href="###"
                      target="_blank"
                      clstag="pageclick|keycount|20161152|2"
                      title="POPMART泡泡玛特 蛋黄哥厨房系列盲盒公仔娃娃潮玩桌面摆件生日礼物 蛋黄哥厨房系列——单个盲盒(随机发不支持退货)"
                      >POPMART泡泡玛特
                      蛋黄哥厨房系列盲盒公仔娃娃潮玩桌面摆件生日礼物
                      蛋黄哥厨房系列——单个盲盒(随机发不支持退货)</a
                    >
                  </div>
                  <div class="mini-extra">
                    <span
                      class="txt"
                      title="蛋黄哥厨房系列-单个墨盒(随机发不支持退货)"
                      >颜色：蛋黄哥厨房系列-单个墨盒(随机发不支持退货)
                    </span>
                    <span class="txt">/ 数量：1 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addToCart",
};
</script>

<style lang="less" scoped>
.main {
  widows: 1452.5px;
  height: 1198px;
}
.success-wrap {
  height: 145px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
}
.w {
  width: 1210px;
  margin: 0 auto;
}

.success-box {
  widows: 1210px;
  height: 126.8px;
  overflow: hidden;
  zoom: 1;
  display: flex;
}
.success-lcol {
  width: 592px;
  height: 126.8px;
}
.succeed-box .success-top {
  position: relative;
  padding-left: 35px;
  margin: 20px 0;
}
.succeed-box .mini-name a {
  color: #333;
}

.succeed-box .success-top {
  position: relative;
  padding-left: 35px;
  margin: 20px 0;
}
.succeed-box .success-top h3 {
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
}
</style>
