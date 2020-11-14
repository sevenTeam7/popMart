<template>
  <div>
    <div class="con">
      <!-- 商品分类导航 -->
      <div class="topNav"></div>
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <span>玩具乐器</span>
        <span>潮玩/动漫</span>
        <span>潮流盲盒</span>
        <span>泡泡玛特（POP MART）</span>
        <span>泡泡玛特（POP MART）</span>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果，给zoom组件传递小图地址和大图地址-->
          <Zoom />
          <!-- 小图列表 -->
          <ImageList />
          <div class="preview-info">
            <div class="left-btns">
              <a
                class="follow J-follow"
                data-id="65957521871"
                href="#none"
                clstag="shangpin|keycount|product|guanzhushangpin_2"
              >
                <i class="sprite-follow-sku"></i><em>关注</em>
              </a>
              <a
                class="share J-share"
                href="#none"
                clstag="shangpin|keycount|product|share_2"
              >
                <i class="sprite-share"></i><em>分享</em>
              </a>
            </div>
            <div class="right-btns">
              <a
                class="report-btn"
                href="//jubao.jd.com/index.html?skuId=65957521871"
                target="_blank"
                clstag="shangpin|keycount|product|jubao"
                >举报</a
              >
            </div>
          </div>
        </div>
        <!-- 右侧主要内容区域 -->
        <div class="InfoWrap">
          <div class="sku-name">
            <img src="./images/jdmart.png" alt="京东超市" />
            POPMART泡泡玛特 Molly小鸟系列盲盒公仔手办娃娃潮玩桌面摆件生日礼物
            Molly小鸟-整盒（12个款式不重复）
          </div>
          <div class="news">
            <div
              class="item hide"
              id="p-ad"
              clstag="shangpin|keycount|product|slogana"
              data-hook="hide"
              title="玩心引力，玩在一起，泡泡玛特十周年嘉年华！攻略来袭查看>"
              style="display: block"
            >
              <a href="#">查看</a>
            </div>
            <div
              class="item hide"
              id="p-ad-phone"
              clstag="shangpin|keycount|product|sloganb"
              data-hook="hide"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Zoom from "./Zoom";
import ImageList from "./ImageList";
export default {
  name: "Detail",
  components: {
    Zoom,
    ImageList,
  },
};
</script>
<style lang="less" scoped>
.con {
  width: 1200px;
  margin: 15px auto 0;
  .topNav {
    height: 200px;
    background-color: red;
  }
  .conPoin {
    padding: 9px 15px 9px 0;
    background-color: #ccc;
    span,
    span:before {
      content: "/\00a0";
      padding: 0 5px;
      color: #999;
    }
    span:nth-child(1) {
      content: "";
    }
  }
  .previewWrap {
    float: left;
    width: 400px;
    position: relative;
  }
  .preview-info {
    height: 20px;
    .left-btns {
      float: left;
    }
    a {
      color: #666;
      text-decoration: none;
    }
    i {
      display: inline-block;
      width: 14px;
      height: 13px;
      background-image: url("./images/__sprite.png");
      // background-image: url(//static.360buyimg.com/item/unite/1.0.110/component);
      background-position: -44px -40px;
    }
    em {
      font-style: normal;
    }
    .right-btns {
      float: right;
    }
  }
  .InfoWrap {
    width: 700px;
    float: right;
    .sku-name {
      font: 700 16px Arial, "microsoft yahei";
      color: #666;
      padding-top: 10px;
      line-height: 28px;
      margin-bottom: 5px;
    }
  }
}
</style>
