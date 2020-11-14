<template>
  <div>
    <div class="con w">
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
          <!-- 关注分享 -->
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
            <p class="desc">
              玩心引力，玩在一起，泡泡玛特十周年嘉年华！攻略来袭
              <a href="#" style="color:#005aa0">查看></a>
            </p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  京&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>5299</em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>65545+</em>
                </div>
              </div>
            </div>
            <div class="choose-wrap">
              <div class="supply">
                <div class="dt">
                  配送至
                </div>
                <!-- 京东价 -->
                <div class="dd ">
                  <div class="stock-address">
                    <div class="text" title="广东深圳市宝安区新安街道">
                      广东深圳市宝安区新安街道
                    </div>
                    <strong>可配货</strong>
                    <strong>支持</strong>
                    <p class="rule">99元免基础运费(20kg内)</p>
                  </div>
                </div>
                <!-- 京东物流 -->
                <div class="dd">
                  <div class="wl">
                    <div class="icon-wl"></div>
                    <p class="rule">预约送货</p>
                    <p class="rule">部分送货</p>
                    <p class="rule">送货上门</p>
                  </div>
                </div>
              </div>

              <!-- 重量 -->
              <div class="weight">
                <div class="dt">
                  重量
                </div>
                <div class="dd">
                  0.5kg
                </div>
              </div>

              <!-- 分界线 -->
              <div
                class="line"
                style="border-bottom: 1px dotted #dfdfdf;margin-bottom: 15px;"
              ></div>

              <!-- 销售属性区域 -->
              <div class="dt">选择型号</div>
              <div class="dd">
                <div class="saleAttr">
                  <a class="selectItem" :class="isSelected ? 'selected' : ''">
                    <img src="./images/sale1.jpg" alt="" />
                    <i>Molly校园-单个盲盒（随机发不支持退货）</i>
                  </a>
                  <a class="selectItem">
                    <img src="./images/sale1.jpg" alt="" />
                    <i>Molly校园-整盒（12个款式不重复）</i>
                  </a>
                </div>
              </div>

              <!-- 白条分期 -->
              <div class="dt">白条分期</div>
              <div class="dd">
                <div class="baitiao">
                  <a class="baitiao-item" href="#">
                    <span>不分期</span>
                  </a>
                  <a class="baitiao-item" href="#">
                    <span>¥19.96 x 3期</span>
                  </a>
                  <a class="baitiao-item" href="#">
                    <span>¥19.96 x 3期</span>
                  </a>
                  <a class="baitiao-item" href="#">
                    <span>¥19.96 x 3期</span>
                  </a>
                  <a class="baitiao-item" href="#">
                    <span>¥19.96 x 3期</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 分界线 -->
          <div
            class="line"
            style="border-bottom: 1px dotted #dfdfdf;margin-bottom: 15px;"
          ></div>

          <!-- 加入购物车 -->
          <div class="cartWrap">
            <div class="controls">
              <input
                autocomplete="off"
                class="itxt"
                v-model="skuNum"
                value="skuNum"
                @input="CheckNum"
              />
              <a href="javascript:" class="plus" @click="skuNum++">+</a>
              <a
                href="javascript:"
                class="mins"
                @click="skuNum > 1 ? skuNum-- : ''"
                >-</a
              >
            </div>
            <div class="add">
              <a href="javascript:">加入购物车</a>
            </div>
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
  data() {
    return {
      isSelected: true,
      skuNum: 1,
    };
  },
  components: {
    Zoom,
    ImageList,
  },
  methods: {
    //限制输入框输入内容---->输入框只能输入正数
    CheckNum() {
      const skuNum = this.skuNum;
      const regNum = /^[1-9]\d*$|\s\g/;
      if (regNum.test(skuNum)) {
        //如果正则通过，显示内容
        this.skuNum = skuNum;
      } else {
        //将输入的字符串先转数组，对数组的每一项过滤,只有数字通过，然会转为字符串
        this.skuNum = this.skuNum
          .split("")
          .filter((item, index) => Number(item))
          .join("");
        return;
      }
    },
  },
  mounted() {
    this.$bus.$on("getIndex", (index) => {
      this.index = index;
    });
  },
};
</script>
<style lang="less" scoped>
.w {
  width: 1200px;
  margin: 15px auto 0;
}
.con {
  .topNav {
    height: 200px;
    background-color: red;
  }
  // 商品导航分类
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
  // 左侧放大镜区域
  .previewWrap {
    float: left;
    width: 400px;
    position: relative;
  }
  // 关注分享
  .preview-info {
    margin-top: 10px;
    height: 20px;
    .left-btns {
      float: left;
      a {
        cursor: pointer;
        margin-right: 2px;
        color: #666;
        text-decoration: none;
        i {
          display: inline-block;
          *display: inline;
          *zoom: 1;
          vertical-align: middle;
          margin-right: 5px;
        }
        .sprite-follow-sku {
          display: inline-block;
          width: 14px;
          height: 13px;
          background-image: url("./images/__sprite.png");
          background-position: -44px -40px;
        }
        .sprite-share {
          display: inline-block;
          width: 15px;
          height: 14px;
          background-image: url("./images/__sprite1.png");
          background-position: -45px -24px;
        }
      }
      // .follow J-follow {
      //   color: #666;
      //   text-decoration: none;
      // }

      em {
        font-style: normal;
      }
    }
    .right-btns {
      float: right;
    }
  }
  // 右侧主要内容区域
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
    .desc {
      color: #e12228;
      margin-top: 15px;
    }
    .priceArea {
      background: #f3f3f3;
      padding: 7px;
      margin: 13px 0;

      .priceArea1 {
        overflow: hidden;
        line-height: 28px;
        margin-top: 10px;

        .title {
          float: left;
          margin-right: 15px;
        }

        .price {
          float: left;
          color: #c81623;

          i {
            font-size: 16px;
          }

          em {
            font-size: 22px;
            color: #e4393c;
            margin-right: 10px;
          }

          span {
            color: #005aa0;
            vertical-align: 2px;
          }
        }

        .remark {
          float: right;
          em {
            color: #005aa0;
          }
        }
      }

      .priceArea2 {
        overflow: hidden;
        line-height: 28px;
        margin-top: 10px;

        .title {
          // margin-right: 15px;
          // float: left;
          float: left;
          padding-left: 10px;
          font-family: simsun;
          color: #999;
        }

        .fixWidth {
          width: 520px;
          float: left;

          .red-bg {
            background: #c81623;
            color: #fff;
            padding: 3px;
          }

          .t-gray {
            color: #999;
          }
        }
      }
    }
    .news {
      margin-bottom: 10px;
    }
    .choose-wrap {
      color: #999;
      .dt {
        float: left;
        padding-left: 10px;
        font-family: simsun;
      }
      .dd {
        margin-left: 70px;
        .rule {
          margin-left: 20px;
          line-height: 25px;
          color: #646fb0;
          font-size: 12px;
        }
        .stock-address {
          display: flex;
          margin: -3px -5px 10px 0;
          .text {
            width: 174px;
            height: 25px;
            border: solid #ccc 1px;
            text-align: center;
            line-height: 25px;
          }
          strong {
            line-height: 25px;
            margin-left: 20px;
            color: #999;
          }
        }
        .wl {
          display: flex;
          .icon-wl {
            display: inline-block;
            background-image: url("./images/jdwl.png");
            width: 86px;
            height: 16px;
            background-size: 100%;
            cursor: pointer;
            vertical-align: middle;
            position: relative;
            top: 4px;
          }
          p {
            line-height: 25px;
          }
        }
      }
      .weight {
        margin-top: 10px;
        margin-bottom: 3px;
        line-height: 32px;
      }
      .saleAttr {
        margin-bottom: 3px;
        .selectItem {
          display: block;
          color: #999;
          background-color: #f7f7f7;
          margin-right: 7px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          text-decoration: none;
          img {
            border: 0;
            vertical-align: middle;
          }
          i {
            margin: 0 8px;
          }
        }
        .selected,
        .selectItem:hover {
          border: 1px solid #e3393c;
          color: #666;
        }
      }
      .baitiao {
        display: flex;
        .baitiao-item {
          padding: 0 13px;
          display: block;
          height: 34px;
          background-color: #fff;
          margin-right: 7px;
          margin-bottom: 4px;
          border: solid #ccc 1px;
          line-height: 34px;
          text-align: center;
          color: #999;
          text-decoration: none;
        }
        .baitiao-item:hover {
          border: solid #e3393c 1px;
          color: #666;
        }
      }
    }
    .cartWrap {
      .controls {
        width: 48px;
        position: relative;
        float: left;
        margin-right: 15px;

        .itxt {
          width: 38px;
          height: 37px;
          border: 1px solid #ddd;
          color: #555;
          float: left;
          border-right: 0;
          text-align: center;
        }

        .plus,
        .mins {
          width: 15px;
          text-align: center;
          height: 17px;
          line-height: 17px;
          background: #f1f1f1;
          color: #666;
          position: absolute;
          right: -8px;
          border: 1px solid #ccc;
        }

        .mins {
          right: -8px;
          top: 19px;
          border-top: 0;
        }

        .plus {
          right: -8px;
        }
      }

      .add {
        float: left;

        a {
          text-decoration: none;
          background-color: #e1251b;
          padding: 0 25px;
          font-size: 16px;
          color: #fff;
          height: 36px;
          line-height: 36px;
          display: block;
        }
      }
    }
  }
}
</style>
