<template>
  <div>
    <Header />
    <!-- 商品 -->
    <div class="shop">
      <div class="shopLeft">
        <ul>
          <li class="shop-one">
            <a class="two" href="#">商品分类<span class="IconArrow"></span></a>
          </li>
          <li>
            <a class="two" href="#">所有商品</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">Molly</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">PUCKY</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">DIMOO</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">Disney迪士尼</a
            ><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">BOBO&COCO</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">LABUBU</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">STORY RORY</a
            ><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">MORE</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">IP周边</a><span class="IconArrow"></span>
          </li>
          <li>
            <a class="two" href="#">BJD/手办</a><span class="IconArrow"></span>
          </li>
        </ul>
      </div>
      <div class="shopRight">
        <div class="shopRight-top">
          <div class="left">
            <a class="three" href="#"
              ><span class="left-one"><em></em>上架时间</span></a
            >
            <a class="three" href="#"><span>好评度</span></a>
            <a class="three" href="#"><span>价格</span></a>
            <a class="three" href="#"><span>销量</span></a>
          </div>
          <div class="right">
            <input type="text" class="search" placeholder="在店铺中搜索" />
            <button></button>
          </div>
        </div>

        <div class="content">
          <div class="content-shop" v-for="item in goodslist" :key="item.id">
            <div class="img">
              <img :src="Imgurl" alt="大图" />
            </div>
            <div class="img-em">
              <ul v-for="img in imgUrl" :key="img.index">
                <li @click="show(img.url)">
                  <img :src="img.url" />
                </li>
              </ul>
            </div>
            <span class="money">￥ {{ item.price }}</span>
            <p class="introduce">{{ item.title }}</p>
            <p>
              已有<span>{{ item.totalAssess }}+</span>人评价
            </p>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[1, 2]"
            :page-size="8"
            layout="prev, pager, next, total"
            :total="16"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  name: "Shop",
  data() {
    return {
      imgUrl: [
        { index: 1, url: require("./images/01.jpg") },
        { index: 2, url: require("./images/02.jpg") },
      ],
      Imgurl: require("./images/01.jpg"),
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
      goodslist: [],
      currentPage: 1,
    };
  },
  methods: {
    show(url) {
      this.Imgurl = url;
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      if (this.currentPage === 8) {
        this.goodslist = this.$store.state.shop.goodslist.goodslist.slice(
          8,
          16
        );
        this.currentPage = -this.currentPage;
      } else {
        this.goodslist = this.$store.state.shop.goodslist.goodslist.slice(0, 8);
        this.currentPage = -this.currentPage;
      }
      console.log(this.goodslist);
    },
  },
  async mounted() {
    await this.$store.dispatch("get_ShopImage");
    this.goodslist = this.$store.state.shop.goodslist.goodslist.slice(0, 8);
    this.currentPage = this.goodslist.length;
  },
};
</script>
<style>
html body {
  height: 100%;
}
/* 商品 */
.shop {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
.shop .shopLeft {
  width: 188px;
  font-family: sans-serif;
  line-height: 1.15;
}
.shop .shopLeft ul li {
  border: 1px solid silver;
  border-bottom: none;
  line-height: 2;
  padding-left: 20px;
  font-size: 14px;
  font-weight: bold;
  line-height: 34px;
  opacity: 0.5;
}
.shop .shopLeft ul .two:hover {
  color: red;
}
.shop .shopLeft .shop-one {
  background: violet;
  font-size: 16px;
  padding-left: 10px;
}
.shop .shopLeft ul .IconArrow {
  display: block;
  background: #333;
  width: 16px;
  height: 16px;
  margin: 8px 10px 0 0;
  cursor: pointer;
  background: url(//img11.360buyimg.com/cms/g5/M02/12/10/rBEDik_ykDIIAAAAAAAFWswAzCsAADnnQJbJocAAAVy913.gif)
    no-repeat;
}

.shop .shopRight {
  width: 790px;
  margin-left: 10px;
}
.shop .shopRight .shopRight-top {
  height: 40px;
  background-color: rgba(188, 143, 143, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop .shopRight .shopRight-top .left {
  font-size: 14px;
  margin-left: 10px;
}
.shop .shopRight .shopRight-top .left span {
  padding: 0 10px;
  height: 22px;
  line-height: 22px;
  background: #fff;
  color: #333;
}
.shop .shopRight .shopRight-top .left .three:hover {
  border: 1px solid red;
}
.shop .shopRight .shopRight-top .left .left-one {
  font-style: normal;
  font-weight: 500;
  background: #e4393c;
}
.shop .shopRight .shopRight-top .left .left-one .a {
  float: left;
  padding: 0 10px;
  height: 22px;
  border: 1px solid #e1e1e1;
  margin-right: -1px;
  line-height: 22px;
  background: #fff;
}
.shop .shopRight .shopRight-top .left em {
  background: url(//img13.360buyimg.com/cms/jfs/t187/96/1871186534/1115/3a5d621a/53be3639Nd10f3877.gif);
  display: inline-block;
  zoom: 1;
  height: 11px;
  margin-right: 5px;
  width: 9px;
  vertical-align: middle;
}
.shop .shopRight .shopRight-top .right {
  margin-right: 50px;
}
.shop .shopRight .shopRight-top .right .search {
  width: 130px;
  height: 22px;
  background-color: #ffffff;
  color: hsl(0, 0%, 79%);
  vertical-align: middle;
  outline: none;
  border: solid 1px #e1e1e1;
  border-top-left-radius: 11px;
  border-bottom-left-radius: 11px;
}
.shop .shopRight .shopRight-top .right button {
  border: 0;
  height: 24px;
  width: 46px;
  cursor: pointer;
  vertical-align: middle;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
  background: rgba(188, 143, 143, 0.3)
    url(//img13.360buyimg.com/cms/jfs/t3121/284/4170076300/1201/43e1ad98/583543d4Nc7e0c1a4.png)
    no-repeat center;
}
.shop .shopRight .content {
  width: 880px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.shop .shopRight .content .content-shop {
  width: 200px;
  height: 300px;
  margin-bottom: 5px;
}

.shop .shopRight .content .img img {
  width: 188px;
  height: 188px;
}
.shop .shopRight .content .img-em {
  display: flex;
}
.shop .shopRight .content .img-em img {
  width: 25px;
  height: 25px;
  margin-right: 3px;
}
.shop .shopRight .content .money {
  font-size: 16px;
  color: red;
  font-weight: bold;
}
.shop .shopRight .pagination {
  margin-top: 50px;
  margin-left: 200px;
}
</style>
