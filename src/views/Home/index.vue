<template>
  <div>
    <div class="container-box">
      <NavList />
      <!-- 头部轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(carousel, index) in banners"
            :key="carousel.id"
          >
            <img :src="carousel.pic" />
          </div>
        </div>
        <!-- 如果需要分页器 -->

        <div id="swiper-pagination" class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div id="swiper-button-prev" class="swiper-button-prev"></div>
        <div id="swiper-button-next" class="swiper-button-next"></div>
      </div>

      <!-- 视频vidio -->
      <div class="video_con">
        <div class="video_tltle">
          ABOUT US
        </div>
        <!-- 我们 -->
        <div class="video_we">
          关于我们
        </div>
        <p class="video_history">
          北京泡泡玛特文化创意有限公司成立于 2010
          年，是中国领先的潮流文化娱乐公司

          <br />

          发展近十年来，围绕艺术家挖掘、IP
          孵化运营、消费者触达以及潮玩文化推广与培育四个领域

          <br />

          POP MART
          泡泡玛特旨在用“创造潮流，传递美好”的品牌文化构建了覆盖潮流玩具全产业链的综合运营平台
        </p>
        <!-- 关于我们注意这里有个跳转到关于我们的页面 -->
        <a href="###">More <i class="el-icon-arrow-right"></i></a>
      </div>

      <!-- 视频 -->

      <!-- <div class="video_box">
        <div class="video">
          <video
            src="https://popwebsite.paquapp.com/popmartwww/pc/index_video.mp4"
            autoplay
            controls
            loop="loop"
          ></video>
        </div>
      </div> -->

      <!-- TO LIGHT UP PASSION AND BRING JOY -->
      <div class="company_con">
        <div class="en_f">TO LIGHT UP PASSION AND BRING JOY</div>
        <p class="found">创造潮流 传递美好</p>
        <ul class="company_con_item_box">
          <a href="###" style="text-decoration: none;">
            <li class="item">
              <div class="magnify">
                <img src="./images/index_company_icon4.png" alt="" />
                <p class="item_title">设计师</p>
              </div>
              <p class="item_desc">
                签约
                Kenny、毕奇、龙家升等知名潮玩设计师，推出众多粉丝喜爱的潮玩产品
              </p>
            </li>
          </a>
          <a href="###" style="text-decoration: none;">
            <li class="item">
              <div class="magnify">
                <img src="./images/index_company_icon3.png" alt="" />
                <p class="item_title">设计师</p>
              </div>
              <p class="item_desc">
                签约
                Kenny、毕奇、龙家升等知名潮玩设计师，推出众多粉丝喜爱的潮玩产品
              </p>
            </li>
          </a>
          <a href="###" style="text-decoration: none;">
            <li class="item">
              <div class="magnify">
                <img src="./images/index_company_icon2.png" alt="" />
                <p class="item_title">设计师</p>
              </div>
              <p class="item_desc">
                签约
                Kenny、毕奇、龙家升等知名潮玩设计师，推出众多粉丝喜爱的潮玩产品
              </p>
            </li>
          </a>
          <a href="###" style="text-decoration: none;">
            <li class="item">
              <div class="magnify">
                <img src="./images/index_company_icon1.png" alt="" />
                <p class="item_title">设计师</p>
              </div>
              <p class="item_desc">
                签约
                Kenny、毕奇、龙家升等知名潮玩设计师，推出众多粉丝喜爱的潮玩产品
              </p>
            </li>
          </a>
        </ul>
      </div>

      <!-- 媒体新闻 -->
      <div class="news_con">
        <p class="news">NEWS</p>
        <p class="journalism">媒体新闻</p>
        <div class="news_item_con ">
          <a
            href="http://life.ynet.com/2020/10/12/2914725t978.html"
            target="_blank"
            class="news_item"
          >
            <img
              src="https://popwebsite.paquapp.com/cms/news/6czx0Sr6063z1480BCT6t8bX2PycZi4b.jpeg"
              alt=""
            />
            <div class="pop_1">
              <div class="news_title">
                做公仔，当然是开心最重要啦
              </div>
              <p class="news_desc">
                设计师Ton Mak分享泡泡玛特“Magical
                Natural”主题系列盲盒公仔的设计历程和艺术人生。
              </p>
              <a
                href="http://life.ynet.com/2020/10/12/2914725t978.html"
                class="el-icon-arrow-right"
                >MORE</a
              >
            </div>
          </a>
          <a
            href="https://cci.ifeng.com/c/80IDz2F0frM"
            target="_blank"
            class="news_item"
          >
            <img
              src="https://popwebsite.paquapp.com/cms/news/jzC0132CM8Jfh6XB48bAsycTEa80Yirb.jpg"
              alt=""
            />
            <div class="pop_1">
              <div class="news_title">
                MIGO设计师雯子：勇于表达自己的熊孩子很可爱
              </div>
              <p class="news_desc">
                用心设计有魅力的作品，不断给玩家带来美好和快乐，期待与玩家的心灵交流，对她而言，同样也是一件美妙的体验。
              </p>
              <a
                href="http://life.ynet.com/2020/10/12/2914725t978.html"
                class="el-icon-arrow-right"
                >MORE</a
              >
            </div>
          </a>
          <a
            href="http://www.cnr.cn/rdzx/cxxhl/zxxx/20200930/t20200930_525283932.shtml"
            target="_blank"
            class="news_item"
          >
            <img
              src="https://popwebsite.paquapp.com/cms/news/faz2E2592kdia7kQ0fNm03ZrM6rerHz0.png"
              alt=""
            />
            <div class="pop_1">
              <div class="news_title">
                潮玩登录未来火星生活周，泡泡玛特让世界了解中国当代青年
              </div>
              <p class="news_desc">
                9月30日，未来火星生活周正式开幕，泡泡玛特亮相甘肃金昌“火星1号基地”，用潮玩的方式搭建火星的生活场景。
              </p>
              <a
                href="http://life.ynet.com/2020/10/12/2914725t978.html"
                class="el-icon-arrow-right"
                >MORE</a
              >
            </div>
          </a>
          <a
            href="http://life.china.com.cn/2020-09/29/content_41315174.htm"
            target="_blank"
            class="news_item"
          >
            <img
              src="https://popwebsite.paquapp.com/cms/news/jZ7KhyxF8T2dcE57anD2Gn2mkR39dKW8.jpg"
              alt=""
            />
            <div class="pop_1">
              <div class="news_title">
                泡泡玛特首次举办粉丝沙龙，央美教授分享潮玩故事
              </div>
              <p class="news_desc">
                9月27日,在泡泡玛特浦项中心体验店,一场别开生面的粉丝沙龙活动与大家见面。
              </p>
              <a
                href="http://life.ynet.com/2020/10/12/2914725t978.html"
                class="el-icon-arrow-right"
                >MORE</a
              >
            </div>
          </a>
          <a
            href="https://www.toutiao.com/i6875243621168185869/"
            target="_blank"
            class="news_item"
          >
            <img
              src="https://popwebsite.paquapp.com/cms/news/FhkAM7XpfdnKKK02isb6wc3fj6ZF73wb.webp"
              alt=""
            />
            <div class="pop_1">
              <div class="news_title">
                《国家宝藏》回归之际，潮玩先行
              </div>
              <p class="news_desc">
                泡泡玛特与国家宝藏合作的最后一款潮玩——铜奔马也如约而至，至此，铜奔马、洛神、李白、格萨尔唐卡均已面世。
              </p>
              <a
                href="http://life.ynet.com/2020/10/12/2914725t978.html"
                class="el-icon-arrow-right"
                >MORE</a
              >
            </div>
          </a>
          <a
            href="http://paper.people.com.cn/rmrbhwb/html/2020-09/18/content_2009561.htm"
            target="_blank"
            class="news_item"
          >
            <img
              src="https://popwebsite.paquapp.com/cms/news/rj2y58weH75et0476ydCr6NCdws5arfh.jpg"
              alt=""
            />
            <div class="pop_1">
              <div class="news_title">
                自主创新的中国潮玩走向世界
              </div>
              <p class="news_desc">
                潮玩已不再是少部分人的兴趣爱好，甚至已上升为一种精神消费，表现出强大的消费潜力。
              </p>
              <a
                href="http://life.ynet.com/2020/10/12/2914725t978.html"
                class="el-icon-arrow-right"
                >MORE</a
              >
            </div>
          </a>
        </div>
      </div>

      <!-- 底部小标题 -->
      <a class="floot_tltle ">
        MORE
        <i class="el-icon-arrow-right"></i>
      </a>
      <!-- 底部 -->
      <Floot />
    </div>
  </div>
</template>
<script>
//引入swpier
import Swiper from "swiper";
//引入vuex辅助函数
import { mapState } from "vuex";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getjournaism");
  },
  watch: {
    banners: {
      //该回调会在侦听开始之后初立即调用
      handler: function() {
        if (this.banners.length === 0) return;
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            // direction: "vertical", // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function(index, className) {
                return (
                  `<image src="https://popwebsite.paquapp.com/popmartwww/pc/popularProduct/ipAvatar${23 +
                    index}.png " class="` +
                  className +
                  '">' +
                  "</image>"
                );
              },
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
};
</script>
<style>
/* 大盒子 */
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
  position: relative;
  top: 12px;
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
#lang {
  position: relative;
  left: -110px;
  top: 20px;
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
/* 轮播图片 */
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 769px;
}
/* 分页器 */
#swiper-pagination {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 130px;
}
/* 分页器图片大小 */
#swiper-pagination img {
  width: 80px;
  height: 80px;
  opacity: 0.8;
  /* display: block; */
}
/* 分页器控制选中的图片 */
.swiper-container .swiper-pagination-bullet-active {
  /* border: 1px solid yellow; */
  border: 3px solid #feba09 !important;
  transform: scale(1.2);
  background: transparent;
}
/* 大轮播图左 */
#swiper-button-prev {
  width: 23px;
  height: 44px;
  content: "prev";
  position: absolute !important;
  left: 180px;
  /* bottom: -170px; */
}
#swiper-button-next {
  width: 23px;
  height: 44px;
  content: "next";
  position: absolute !important;
  right: 180px;
  /* bottom: 0px; */
}
.container-box .swiper-slide > img {
  width: 100%;
}
.video_con {
  margin-top: 55px;
}
.video_con .video_tltle {
  text-align: center;
  font-size: 26px;
  font-family: "DINCond-Black";
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 16px;
}
.video_con .video_we {
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  color: #1a1a1a;
}
.video_con .video_history {
  /* margin-top: 65px; */
  margin: 55px 0 58px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 25px;
}
.video_con > a {
  display: block;
  font-weight: 600;
  text-align: center;
  font-size: 15px;
  margin-bottom: 70px;
}
.container-box .video_box {
  width: 650px;
  height: 370px;
  margin: 0 auto;
  position: relative;
  background: #1a1a1a;
}
.container-box .video_box .video > video {
  width: 650px;
  /* margin-bottom: 70px; */
}
.container-box .company_con {
  width: 100%;
  height: 550px;
  background: #feba0a;
  margin-top: 70px;
}
.container-box .company_con .en_f {
  width: 900px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  font-size: 30px;
  color: #1a1a1a;
  margin: 0 auto;
  padding: 93px 0 18px 0;
}
.container-box .company_con .found {
  height: 21px;
  text-align: center;
  font-size: 20px;
  line-height: 21px;
  color: #000;
  margin-bottom: 97px;
}
/* 设计师四个 */
.company_con_item_box {
  width: 900px;
  height: 195px;
  margin: 0 auto;
  /* background-color: pink; */
}
/* 这是一个li */
.company_con .company_con_item_box .item {
  width: 225px;
  height: 195px;
  float: left;
  /* background-color: red; */
}
/* 字体和扫把放大功能 */
.item .magnify:hover {
  transform: scale(1.2);
}
/* 小扫把 */
.company_con_item_box .item .magnify > img {
  display: block;
  width: 57px;
  height: 57px;
  margin: 0 auto;
  line-height: 57px;
  background-size: 100%;
}
/* 设计师 */
.company_con_item_box .item .magnify .item_title {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding: 18px 0 15px 0;
  color: black;
}
/* 签约等文字 */
.company_con_item_box .item .item_desc {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  text-align: center;
  padding: 0 14px;
}
/* 媒体新闻 */
.container-box .news_con {
  margin-top: 97px;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
}
/* 六张图片 */
.container-box .news_con .news {
  width: 100%;
  height: 35px;
  line-height: 35px;
  color: #1a1a1a;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 10px;
}
.container-box .news_con .journalism {
  color: #000;
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 87px;
}
.container-box .news_con .news_item_con {
  width: 960px;
  height: 402px;
  margin: 0 auto;
  /* background-color: pink; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.container-box .news_con .news_item_con .news_item {
  width: 304px;
  height: 180px;
  position: relative;
  overflow: hidden;
  display: block;
  -webkit-box-flex: 0;
}
.container-box .news_con .news_item_con .news_item img {
  width: 321px;
  height: 180px;
}
.container-box .news_con .news_item_con .news_item .pop_1 {
  width: 304px;
  height: 180px;
  position: absolute;
  top: 0;
  left: 305px;
  background: url(https://popwebsite.paquapp.com/popmartwww/pc/mini_bac_dark.png)
    no-repeat;
  background-size: 100% 100%;
  opacity: 1;
  color: #fff;
}
/* 让图片有过渡效果 */
.container-box .news_con .news_item_con :hover > .pop_1 {
  width: 304px;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0px;
  transition: left 0.5s;
}
.container-box .news_con .news_item_con .pop_1 .news_title {
  padding: 5px 55px 30px 20px;
  font-size: 17px;
  font-weight: 100;
  line-height: 25px;
  color: #fff;
}
.container-box .news_con .news_item_con .pop_1 .news_desc {
  font-size: 10px;
  width: 264px;
  height: 36px;
  text-align: left;
  margin-left: 26px;
}
.container-box .news_con .news_item_con .pop_1 .el-icon-arrow-right {
  display: block;
  position: absolute;
  right: 10px;
  bottom: 15px;
  font-size: 12px;
  flood-color: #fff !important;
}
.container-box .news_con .news_item_con .pop_1 > a {
  text-decoration: none;
  color: #fff;
}
.container-box .floot_tltle {
  padding: 20px 0 60px 0;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
}
</style>
