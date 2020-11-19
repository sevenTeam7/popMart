<template>
  <div>
    <Header />
    <div class="con w clearFix" v-if="goodsInfo && goodsList">
      <!-- 商品分类导航 -->
      <!-- 导航路径区域 -->
      <div class="conPoin clearFix">
        <span>玩具乐器</span>
        <span>潮玩/动漫</span>
        <span>潮流盲盒</span>
        <span>泡泡玛特（POP MART）</span>
        <span>泡泡玛特（POP MART）</span>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon clearFix">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap clearFix">
          <!--放大镜效果，给zoom组件传递中图地址和大图地址-->
          <Zoom
            :bigImgUrl="goodsInfo[0].bigImgList[index]"
            :middleImgUrl="goodsInfo[0].middleImgList[index]"
          />
          <!-- 小图列表 -->
          <ImageList :smallImgList="goodsInfo[0].smallImgList" />
          <!-- 关注分享 -->
          <div class="preview-info clearFix">
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
        <div class="InfoWrap" v-if="goodsInfo">
          <div class="sku-name">
            <img src="./images/jdmart.png" alt="京东超市" />
            <!-- POPMART泡泡玛特 Molly小鸟系列盲盒公仔手办娃娃潮玩桌面摆件生日礼物
            Molly小鸟-整盒（12个款式不重复） -->
            {{ goodsInfo[0].goodsid[0].title }}
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
                  <em>{{ goodsInfo[0].goodsid[0].price }}</em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>{{ goodsInfo[0].goodsid[0].totalAssess }}+</em>
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
                v-model="skunum"
                value="skunum"
                @input="CheckNum"
              />
              <a href="javascript:" class="plus" @click="skunum++">+</a>
              <a
                href="javascript:"
                class="mins"
                @click="skunum > 1 ? skunum-- : ''"
                >-</a
              >
            </div>
            <div class="add" @click="toCart">
              <a href="javascript:">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w">
      <!-- 左侧 -->
      <div class="aside clearFix">
        <!-- 店铺 -->
        <div class="popbox">
          <div class="popbox-inner">
            <div class="mt">
              <h3>
                <a
                  href="//mall.jd.com/index-10179889.html?from=pc"
                  target="_blank"
                  title="泡泡玛特京东自营旗舰店"
                  >泡泡玛特京东自营旗舰店</a
                >
              </h3>
              <div class="iconfont icon-wangwang"></div>
            </div>
            <div class="mc">
              <div class="summary">
                <div class="btns">
                  <a href="#" class="btn-a ">
                    <i class="iconfont icon-shouye"></i>
                    进店逛逛
                  </a>
                  <a href="#" class="btn-a ">
                    <i class="iconfont icon-shoucang"></i>
                    关注店铺
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 店内搜索 -->
        <div class="popbox">
          <div class="popbox-inner">
            <div class="mt">
              <h3>
                <a
                  href="//mall.jd.com/index-10179889.html?from=pc"
                  target="_blank"
                  title="店内搜索"
                  >店内搜索</a
                >
              </h3>
            </div>
            <div class="mc">
              <p>
                <span>关键字：</span>
                <input type="text" style="width:122px" />
              </p>
              <p>
                <span>价格：</span>
                <input type="text" class="price-ipt" />
                <span class="price-text">到</span>
                <input type="text" class="price-ipt" />
              </p>
              <button style="margin-left: 51px;">搜索</button>
            </div>
          </div>
        </div>

        <!-- 店内分类 -->
        <div class="popbox">
          <div class="popbox-inner">
            <div class="mt">
              <h3>
                店内分类
              </h3>
            </div>
            <div class="category">
              <div class="mc">
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link to="/shop">
                      <a href="#" target="_blank">PUCKY</a></router-link
                    >
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
                <dl class="sp-single">
                  <dt class="open">
                    <s></s>
                    <router-link :to="{ path: 'shop' }">
                      <a href="#" target="_blank">Molly</a>
                    </router-link>
                  </dt>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- 店内热销 -->
        <div class="popbox">
          <el-tabs type="border-card" stretch>
            <el-tab-pane label="店内热销">店内热销</el-tab-pane>
            <el-tab-pane label="热门关注">热门关注</el-tab-pane>
          </el-tabs>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="detail">
        <el-tabs type="border-card">
          <!-- 商品介绍 -->
          <el-tab-pane label="商品介绍">
            <span slot="label"><i class="el-icon-date"></i> 商品介绍</span>
            <div class="tab-con">
              <div class="p-parameter">
                <ul class="p-parameter-list">
                  <li>
                    品牌：
                    <a href="#">泡泡玛特（POP MART）</a>
                  </li>
                </ul>
              </div>
              <div class="p-parameter">
                <ul class="p-parameter-list">
                  <li>
                    商品名称：泡泡玛特（POP MART）盲盒
                  </li>
                  <li>
                    商品编号：65960814183
                  </li>
                  <li>
                    商品毛重：500.00g
                  </li>
                  <li>
                    商品产地：中国大陆
                  </li>
                  <li>
                    材质：PVC
                  </li>
                  <li>
                    颜色：混合颜色
                  </li>
                </ul>
              </div>
              <div class="detail-con">
                <p>
                  <img
                    src="./images/detail-1.jpg"
                    alt=""
                    style="width:auto;height:auto;max-width:100%;"
                  />
                  <img
                    src="./images/detail-2.png"
                    alt=""
                    style="width:auto;height:auto;max-width:100%;"
                  />
                  <img
                    src="./images/detail-3.png"
                    alt=""
                    style="width:auto;height:auto;max-width:100%;"
                  />
                  <img
                    src="./images/detail-4.png"
                    alt=""
                    style="width:auto;height:auto;max-width:100%;"
                  />
                  <img
                    src="./images/detail-5.png"
                    alt=""
                    style="width:auto;height:auto;max-width:100%;"
                  />
                  <img
                    src="./images/detail-6.png"
                    alt=""
                    style="width:auto;height:auto;max-width:100%;"
                  />
                </p>
              </div>
            </div>
          </el-tab-pane>

          <!-- 规格与包装 -->
          <el-tab-pane label="规格与包装">
            <div class="hide">
              <div class="package-list">
                <h3>包装清单</h3>
                <p>暂无</p>
              </div>
            </div>
            <AfterSale />
          </el-tab-pane>

          <!-- 售后保障 -->
          <el-tab-pane label="售后保障">
            <AfterSale />
          </el-tab-pane>

          <!-- 商品评价 -->
          <el-tab-pane label="商品评价2000+">
            <div class="comment">
              <div class="mt">
                <h3>商品评价</h3>
              </div>
              <div class="mc">
                <div class="comment-info">
                  <div class="comment-percent">
                    <strong class="percent-tit">好评度</strong>
                    <div class="percent-con">
                      98
                      <span>%</span>
                    </div>
                  </div>
                  <div class="percent-info">
                    <div class="tag-list">
                      <span class="tag-1">做工一流(7)</span>
                      <span class="tag-1">乖萌可爱(3)</span>
                      <span class="tag-1">方便实用(2)</span>
                      <span class="tag-1">稳定性高(1)</span>
                      <span class="tag-1">趣味无穷(1)</span>
                      <span class="tag-1">精美绝伦(1)</span>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="tab-main">
                    <ul
                      class="filter-list"
                      style="background-color: #fafafa;padding-left: 10px;"
                    >
                      <!-- 全部评价 -->
                      <li
                        class="current"
                        style="display: inline-block; padding: 5px 10px;"
                        @click="changeCommentList(1)"
                      >
                        <a
                          href="javascript:;"
                          style="color: #e4393c;text-decoration: none;"
                        >
                          全部评价
                          <em>(2000+)</em>
                        </a>
                      </li>
                      <!-- 好评 -->
                      <li
                        class="current"
                        style="display: inline-block; padding: 5px 10px;"
                        @click.stop="changeCommentList(2)"
                      >
                        <a href="javascript:;" style="text-decoration: none;">
                          好评
                          <!-- <em>{{ commentsNum }}</em> -->
                          <em>20</em>
                        </a>
                      </li>
                      <!-- 中评 -->
                      <li
                        class="current"
                        style="display: inline-block; padding: 5px 10px;"
                        @click="changeCommentList(3)"
                      >
                        <a href="javascript:;" style="text-decoration: none;">
                          中评
                          <em>20</em>
                        </a>
                      </li>
                      <!-- 差评 -->
                      <li
                        class="current"
                        style="display: inline-block; padding: 5px 10px;"
                        @click="changeCommentList(4)"
                      >
                        <a href="javascript:;" style="text-decoration: none;">
                          差评
                          <em>20</em>
                        </a>
                      </li>

                      <!-- 晒图 -->
                      <li
                        class="current"
                        style="display: inline-block; padding: 5px 10px;"
                      >
                        <a href="javascript:;" style="text-decoration: none;">
                          晒图
                          <em>(2)</em>
                        </a>
                      </li>

                      <!-- 视频评论 -->
                      <li
                        class="current"
                        style="display: inline-block; padding: 5px 10px;"
                      >
                        <a href="javascript:;" style="text-decoration: none;">
                          视频评论
                          <em>(2)</em>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="tab-con" v-if="goodsInfo">
                    <div
                      v-for="(userInfo, index) in !commentList
                        ? totalCommentList
                        : commentList"
                      :key="index"
                    >
                      <Comment :userInfo="userInfo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <!-- 好评商品 -->
          <el-tab-pane label="本店好评商品">
            <div class="shop-similar-promotion">
              <div class="mt">
                <h3 class="fl">本店好评商品</h3>
              </div>
              <div class="mc">
                <ul class="shop-similar-promo-list" style="position: relative;">
                  <Good
                    :goodObj="goodObj"
                    v-for="goodObj in goodsList"
                    :key="goodObj._id"
                  />
                </ul>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Zoom from "./Zoom";
import ImageList from "./ImageList";
import AfterSale from "./AfterSale";
import Comment from "./Comment";
import Good from "./Good";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      isSelected: true,
      skunum: 1,
      commentList: "",
      init: true, //全部评论与好评数组等的切换
      index: 0, //小图索引
      skuid: 7, //当前商品id
    };
  },
  components: {
    Zoom,
    ImageList,
    AfterSale,
    Comment,
    Good,
    Header,
  },
  methods: {
    //购买数量-限制输入框输入内容---->输入框只能输入正数
    CheckNum() {
      const skunum = this.skunum;
      const regNum = /^[1-9]\d*$|\s\g/;
      if (regNum.test(skunum)) {
        //如果正则通过，显示内容
        this.skunum = skunum;
      } else {
        //将输入的字符串先转数组，对数组的每一项过滤,只有数字通过，然会转为字符串
        this.skunum = this.skunum
          .split("")
          .filter((item, index) => Number(item))
          .join("");
        return;
      }
    },
    //根据参数获取对应评论数据
    changeCommentList(flag) {
      //总对象
      const totalList = this.goodsInfo[0];
      //好评
      const highopinion = totalList.highopinion;
      //中评
      const mediumopinion = totalList.mediumopinion;
      //差评
      const badopinion = totalList.badopinion;
      switch (flag) {
        case 1: {
          this.commentList = [...mediumopinion, ...highopinion, ...badopinion];

          return;
        }
        case 2: {
          this.commentList = highopinion;

          return;
        }
        case 3: {
          this.commentList = mediumopinion;

          return;
        }
        case 4: {
          this.commentList = badopinion;

          return;
        }
      }
    },
    //点击登录跳转到订单详情页面
    async toCart() {
      //添加购物车
      const { skuid, skunum } = this;
      await this.$store.dispatch("getAddCartGood", { skuid, skunum });
      const imgSrc = this.goodsInfo[0].smallImgList[0];
      const title = this.goodsInfo[0].goodsid[0].title;
      const targetGood = {
        imgSrc,
        title,
      };
      this.$router.push({
        name: "addToCart",
        params: { targetGood: targetGood },
      });
    },
  },
  mounted() {
    //获取小图索引
    this.$bus.$on("getIndex", (index) => {
      this.index = index;
    });
    //获取当前商品信息
    this.$store.dispatch("getGoodsInfo", this.skuid);

    //获取好评商品数据
    this.$store.dispatch("getGoodsList");
  },
  computed: {
    ...mapState({
      goodsInfo: (state) => {
        return state.detail.goodsInfo;
      },
      goodsList: (state) => {
        return state.detail.goodsList;
      },
      addCartGood: (state) => {
        return state.detail.addCartGood;
      },
    }),
    ...mapGetters(["totalCommentList"]),
  },
};
</script>
<style lang="less" scoped>
.w {
  width: 1200px;
  margin: 15px auto 0;
}
.clearFix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.con {
  .topNav {
    height: 200px;
    background-color: red;
    overflow: hidden;
  }
  // 商品导航分类
  .conPoin {
    padding: 9px 15px 9px 0;
    background-color: #f3f3f3;
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
//商品描述部分
// 左侧
.mt {
  padding: 10px;
  overflow: hidden;
  background-color: #f7f7f7;
  border: 1px solid #eee;
}
.mc {
  border: 1px solid #eee;
  border-top: none;
  overflow: visible;
}
h3 {
  font: 700 14px "microsoft yahei";
  color: #666;
}
.aside {
  margin-right: 10px;
  float: left;
  width: 200px;
  margin-bottom: 20px;
  .popbox {
    margin-bottom: 15px;
    overflow: hidden;
    .mt {
      background-color: #f7f7f7;
      border: 1px solid #eee;
      display: flex;
      h3 {
        // float: left;
        max-width: 150px;
        height: 18px;
        overflow: hidden;
        font: 700 14px "microsoft yahei";
        a {
          color: #666;
          text-decoration: none;
          margin: 0;
          padding: 0;
        }
      }
      .icon-wangwang {
        color: #e12228;
      }
    }
    .mc {
      padding-top: 0;
      background-color: #fff;
      padding: 10px 10px 0;
      .btns {
        padding: 10px 0;
        font-size: 0;
        text-align: center;
        display: flex;
        .btn-a {
          text-decoration: none;
          display: inline-block;
          width: 88px;
          height: 34px;
          line-height: 34px;
          padding: 0;
          margin-right: 8px;
          font-size: 12px;
          border: 1px solid #ddd;
          background-color: #f8f8f8;
          color: #666;
        }
        .icon-shouye,
        .icon-shoucang {
          color: #e12228;
        }
      }
    }
    p {
      display: flex;
      justify-content: space-around;
      padding: 2px;
      overflow: hidden;
      margin-bottom: 5px;
      span {
        width: 7em;
      }
      input {
        display: inline-block;
        width: 130px;
      }
      .price-ipt {
        width: 49px;
      }
      .price-text {
        width: 3em;
        text-align: center;
      }
    }
    .category {
      .mc {
        margin-top: -1px;
        padding: 0;
        .sp-single {
          border-bottom: none;
          dt {
            border-top: 1px solid #ddd;
            position: relative;
            border-bottom: none;
            s {
              background-position: -37px 0;
              display: block;
              position: absolute;
              left: 10px;
              top: 6px;
              width: 16px;
              height: 16px;
              background-image: url("./images/20130603A.png");
              background-repeat: no-repeat;
              cursor: pointer;
            }
            a {
              background: #f7f7f7;
              display: block;
              height: 28px;
              line-height: 28px;
              text-decoration: none;
              padding-left: 36px;
            }
          }
        }
      }
    }
  }
}

// 右侧
ul {
  overflow: hidden;
  list-style: none;
}
.detail {
  width: 990px;
  min-height: 220px;
  float: right;
  display: inline;
  .tab-con {
    padding: 10px 0;
    .p-parameter {
      padding: 0 10px 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
      .p-parameter-list {
        padding: 20px 0 15px;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 200px;
          padding-left: 42px;
          float: left;
          margin-bottom: 5px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          a {
            text-decoration: none;
          }
        }
      }
    }
    .detail-con {
      p {
        display: block;
        img {
          border: 0;
          vertical-align: middle;
        }
      }
    }
  }
  .guarantee {
    .serve-agree-bd {
      .item-detail {
        padding: 10px;
        line-height: 180%;
        margin-bottom: -58px;
        .serve-agree-bd {
          padding: 20px 20px 20px 62px;
          dt {
            display: flex;
            height: 32px;
            line-height: 32px;
            margin-left: -42px;
            font-size: 16px;
            color: #e4393c;
            font-family: "microsoft yahei";
            i {
              display: inline-block;
              line-height: 32px;
              margin-right: 10px;
              vertical-align: bottom;
              font-style: normal;
            }
            .goods {
              display: block;
              width: 32px;
              background-position: -32px -75px;
              height: 32px;
              background-image: url("./images/__sprite2.png");
            }
            strong {
              margin-top: -10px;
              display: inline-block;
              padding: 8px 0 3px;
              font-style: normal;
              font-weight: 700;
            }
          }
          dd {
            display: block;
            padding: 0px 0 30px;
            line-height: 18px;
          }
        }
      }
    }
    .state {
      padding: 10px;
      strong {
        color: #e4393c;
        display: inline-block;
        padding: 8px 0 3px;
      }
      b {
        font-weight: bold;
      }
    }
  }
}
.package-list {
  padding: 32px 0;
  line-height: 220%;
  color: #999;
  font-size: 12px;
  margin-top: -1px;
  display: flex;
  h3 {
    width: 130px;
    text-align: right;
    font-weight: 400;
    font-size: 12px;
    float: left;
  }
  p {
    margin-left: 30px;
    padding-right: 50px;
    margin-top: -6px;
  }
}
.comment {
  .mc {
    overflow: visible;
    .comment-info {
      overflow: hidden;
      zoom: 1;
      padding: 25px 0px;
      .comment-percent {
        width: 90px;
        padding: 15px 0px 0px 40px;
        float: left;
        .percent-tit {
          font-size: 12px;
          color: rgb(102, 102, 102);
          font-weight: 400;
        }
        .percent-con {
          line-height: 110%;
          font-size: 45px;
          color: rgb(228, 57, 60);
          font-family: arial;
        }
        span {
          font-size: 23px;
        }
      }
      .percent-info {
        margin-left: 90px;
        .tag-list {
          padding-left: 20px;
          height: auto;
          overflow: visible;
          span {
            display: inline-block;
            line-height: 20px;
            padding: 0px 9px;
            border: 1px solid rgb(224, 224, 224);
            border-radius: 2px;
            margin-right: 10px;
            margin-bottom: 10px;
            color: rgb(153, 153, 153);
            cursor: pointer;
          }
          .tag-1 {
            color: rgb(153, 153, 153);
            border-color: rgb(224, 224, 224);
          }
        }
      }
    }
    .comments-list {
      min-height: 93px;
      .tab-main {
        position: relative;
        display: block;
        border: 1px solid #f5f5f5;
        .filter-list {
          margin-top: -1px;
          list-style: none;
          li {
            padding: 5px 10px;
            position: relative;
            display: inline-block;
            font-family: "microsoft yahei";
            em {
              font-style: normal;
            }
          }
          .current {
            background: #fafafa;
            color: #e4393c;
            cursor: default;
            padding: 5px 10px;
          }
        }
      }
      .tab-con {
        padding: 10px 0;
        .comment-item {
          zoom: 1;
          padding: 15px;
          border-bottom: 1px solid rgb(221, 221, 221);
          .user-column {
            width: 140px;
            float: left;
            .user-info {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              img {
                border-radius: 50%;
                margin-right: 5px;
                border: 0;
                vertical-align: middle;
              }
            }
            .user-level {
              padding-top: 3px;
              .comment-plus-icon {
                display: inline-block;
                margin: 5px 5px 0px 0px;
              }
            }
          }
          .comment-column {
            margin-left: 150px;
            .comment-con {
              font-size: 14px;
              padding: 10px 0px;
              line-height: 180%;
              color: rgb(51, 51, 51);
            }
          }
        }
        .pic-list {
          padding-bottom: 15px;
          img {
            border: 1px solid rgb(226, 226, 226);
            padding: 1px;
            margin-right: 6px;
            vertical-align: middle;
          }
        }
        .order-info {
          float: left;
          color: rgb(153, 153, 153);
        }
        .comment-op {
          float: right;
          a {
            display: inline-block;
            margin-left: 25px;
            color: rgb(102, 102, 102);
            text-decoration: none;
            i {
              margin-right: 5px;
              vertical-align: -2px;
            }
            .sprite-praise {
              display: inline-block;
              background-position: -32px -34px;
              width: 16px;
              height: 16px;
              background-image: url("./images/__sprite3.png");
            }
            .sprite-comment {
              display: inline-block;
              background-position: -48px -34px;
              width: 16px;
              height: 16px;
              background-image: url("./images/__sprite3.png");
            }
          }
        }
      }
    }
  }
}

//本店好评商品
.shop-similar-promotion {
  margin-bottom: 15px;
  h3 {
    font: 700 14px "microsoft yahei";
  }
  .shop-similar-promo-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      // margin-right: 20px;
      height: 350px;
      width: 220px;
      padding-bottom: 10px;
      .pro-wrap {
        width: 218px;
        border: 1px solid #f5f5f5;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.09);
        .p-img {
          height: 220px;
          width: 218px;
          padding: 0;
          margin-bottom: 8px;
          overflow: hidden;
          img {
            width: 220px;
            margin-left: -1px;
            border: 0;
            vertical-align: middle;
            height: 220px;
          }
        }
        .p-name {
          width: 200px;
          height: auto;
          max-height: none;
          line-height: 16px;
          padding: 0 9px;
          margin-bottom: 5px;
          min-height: 36px;
        }
        .p-price {
          width: 200px;
          height: 16px;
          line-height: 16px;
          padding: 0 9px;
          margin-bottom: 8px;
          overflow: hidden;
          em {
            color: #999;
          }
          .p-focus {
            float: right;
            width: 70px;
            height: 16px;
            text-align: right;
            .i-focus {
              display: inline-block;
              width: 14px;
              height: 13px;
              margin-top: 2px;
              margin-right: 5px;
              vertical-align: top;
              background: url("./images/i-focus.png") no-repeat;
            }
            .text {
              display: inline-block;
              height: 16px;
              line-height: 16px;
              vertical-align: top;
            }
          }
          a {
            color: #666;
            text-decoration: none;
          }
          .price {
            font-family: verdana;
            color: #e4393c;
            font-size: 14px;
          }
          .p-comment {
            width: 200px;
            max-height: 48px;
            padding: 9px;
            background: #f7f7f7;
            .inner {
              width: 100%;
              max-height: 48px;
              line-height: 16px;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>
