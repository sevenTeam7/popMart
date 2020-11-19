<template>
<<<<<<< HEAD
  <div>
    <Header />
    <!-- 最外层盒子 -->
=======
  <!-- 最外层盒子 -->
  <div>
    <Header />
>>>>>>> hyl
    <div class="main">
      <!-- 导航栏 -->

      <!-- 顶部盒子 -->
<<<<<<< HEAD
      <div class="success-wrap" v-if="targetGood">
=======
      <div class="success-wrap">
>>>>>>> hyl
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
                  <h3 class="succees" style="display:inline-block">
                    商品已经成功加入购物车!
                  </h3>
                </div>
                <!-- 小图区域第一项 -->
                <div class="small-item">
                  <!-- 顶部左边小图 -->
                  <div class="small-img">
                    <div class="p-img">
<<<<<<< HEAD
                      <img :src="targetGood.imgSrc" alt="##" width="60" />
=======
                      <img
                        src="../addToCart/images/labixiaoxin-04.png"
                        alt="##"
                        width="60"
                      />
>>>>>>> hyl
                    </div>
                  </div>
                  <!-- 小图配套信息 -->
                  <div class="mini-info">
                    <div class="mini-name">
                      <a
                        href="###"
                        target="_blank"
                        clstag="pageclick|keycount|20161152|2"
                        title="POPMART泡泡玛特 蛋黄哥厨房系列盲盒公仔娃娃潮玩桌面摆件生日礼物 蛋黄哥厨房系列——单个盲盒(随机发不支持退货)"
<<<<<<< HEAD
                        >{{ targetGood.title }}</a
=======
                        >POPMART泡泡玛特
                        蛋黄哥厨房系列盲盒公仔娃娃潮玩桌面摆件生日礼物
                        蛋黄哥厨房系列——单个盲盒(随机发不支持退货)</a
>>>>>>> hyl
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
              <!-- 顶部右边的区域 -->
              <div class="success-btns">
                <div class="success-ad">
                  <a href="#none"></a>
                </div>
                <!-- 点击跳转 -->
                <div class="btn-jump">
<<<<<<< HEAD
                  <a class="btn-tobback" href="##">查看商品详情</a>
                  <a class="btn-addtocart" href="##">去购物车结算</a>
=======
                  <!-- 查看商品详情 wdz-->
                  <router-link class="btn-tobback" to="/Detail">
                    查看商品详情</router-link
                  >

                  <!-- 跳转购物车结算。wqh -->
                  <router-link class="btn-addtocart" to="/cartasyc"
                    >去购物车结算</router-link
                  >
>>>>>>> hyl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容区域 -->
      <div class="content">
        <!-- 加购 -->
        <div class="wid">
          <div class="mt">
            <h3>购买了该商品的用户还购买了</h3>
          </div>
          <div class="goods-list">
            <ul>
              <li v-for="item in this.shopList" :key="item._id">
                <div class="item">
                  <div class="p-img">
                    <img
                      src="./images/hangbao-03.png"
                      alt=""
                      width="98"
                      height="98"
                    />
                  </div>
                  <div>
                    <div class="p-name">
                      <a
                        href="#"
                        title="rolife若来盲盒Nanci囡茜梦境下午茶系列盲盒手办礼物女 单个下午茶盲盒（整套不重复请拍12件）"
                      >
                        {{ item.title }}
                      </a>
                    </div>
                    <div class="p-price">
                      <strong
                        ><em>￥</em><i>{{ item.price }}</i></strong
                      >
                    </div>
                    <div class="p-btn">
                      <button>加入购物车</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="block">
          <!-- current-change	currentPage 改变时会触发 -->
          <!-- page-size	每页显示条目个数，支持 .sync 修饰符 -->
          <!-- page-sizes	每页显示个数选择器的选项设置 -->
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[3, 6, 9]"
            :page-size="6"
            layout="prev, pager, next, total"
            :total="16"
          >
          </el-pagination>
        </div>
      </div>
      <!-- 底部区域 -->
      <footer />
    </div>
<<<<<<< HEAD
=======
    <!-- 底部区域 -->
    <Footer />
>>>>>>> hyl
  </div>
</template>

<script>
export default {
  name: "addToCart",
  data() {
    return {
      shopList: [],
      pageNum: 1, //当前页码
      targetGood: this.$route.params.targetGood,
    };
  },
  // 异步安装
  async mounted() {
    // 引入路由接口
    await this.$store.dispatch("get_ShopImage");
    // 将接口数据赋值给shopList
    this.shopList = this.$store.state.addToCart.getShopImage.goodslist;
    // 定义切割每个界面6条数据
    this.shopList = this.shopList.slice(0, 6);
  },

  methods: {
<<<<<<< HEAD
    // 异步请求分页
    async handleCurrentChange(val) {
      // 定义该数据为当前页面
      this.pageNum = val;
      // 
      let list = await this.$store.state.addToCart.getShopImage.goodslist;

      this.shopList = list;
      // 如果当前界面为1时
      if (this.pageNum == 1) {
        // 定义了一个界面只有6条数据，用SLICE从接口总条数切割出6条数据
        this.shopList = list.slice(0, 6);
        // 返回总16数据
=======
    // 分页点击事件
    async handleCurrentChange(val) {
      // 定义了pageNum是可修改
      this.pageNum = val;
      // 将接口数据赋值给shopList
      let list = await this.$store.state.addToCart.getShopImage.goodslist;
      // 列表数据赋值给了接口
      this.shopList = list;
      // 如果当界面为1的时候
      if (this.pageNum == 1) {
        // 将在总数据中切割出6条
        this.shopList = list.slice(0, 6);
        // 切割完必须返回数据
>>>>>>> hyl
        return;
        // 当界面为2的时候。切割出6条数据
      } else if (this.pageNum == 2) {
        // 用SLICE从接口总条数切割出6条数据
        this.shopList = list.slice(6, 12);
        // 不然就是剩下的数据
      } else {
        // 如果不返回总的数据，第三次切割将不够数据，会出现BUG
        this.shopList = list.slice(12, 16);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 1452.5px;
<<<<<<< HEAD
  margin-top: 55px;
=======
>>>>>>> hyl
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
/*  */
.small-img .p-img {
  width: 60px;
  margin-right: 10px;
  border: 1px solid #e8e8e8;
}
.small-item {
  display: flex;
  color: #71b247;
}

.success-box {
  widows: 1210px;
  height: 126.8px;
  zoom: 1;
  display: flex;
  justify-content: space-between;
  /*  border-bottom: 1px solid #000; */
}

.success-top .succ-icon {
  margin-right: 10px;
  line-height: 25px;
  width: 25px;
  height: 25px;
  background: url("./images/addtocart-icons.png");
  display: inline-block;
}
/*  */
.success-lcol .success-top h3 {
  font-size: 18px;
  line-height: 25px;
  height: 25px;
  font-weight: 400;
  display: inline-block;
  color: #71b247;
}
.succees-box .mini-img {
  width: 60px;
  margin-right: 10px;
  display: block;
  border: 1px solid #e8e8e8;
}
.success-lcol {
  width: 592px;
  height: 126.8px;
}
.succees-box .success-top {
  padding-left: 35px;
  margin: 20px 0;
}
.mini-info {
  display: block;
}
/* 文本隐藏 */
.mini-info .mini-name {
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 520px;
  margin: 0;
}

.succees-box .mini-name a {
  text-decoration: none;
  color: #333;
}

.succees-box .success-top {
  position: relative;
  padding-left: 35px;
  margin: 20px 0;
}

.success-btns {
  width: 336px;
  height: 126px;
}
.success-ad {
  height: 70px;
  width: 106px;
  margin: 10px 0;
}
.btn-jump {
  width: 336px;
  height: 36px;
}
.btn-tobback {
  // box-sizing: border-box;
  padding: 0 30px;
  margin-right: 10px;

  background: #fff;
  color: #e2231a;
  height: 34px;
  line-height: 36px;
  font-size: 16px;
  vertical-align: middle;
  display: inline-block;
  text-decoration: none;
}
.btn-tobback:hover {
  border: 1px solid #e2231a;
}

.btn-addtocart {
  text-decoration: none;

  position: relative;
  width: 136px;
  padding-left: 30px;

  border: 1px solid #e2231a;
  color: #fff;
  display: inline-block;
  background-color: #e2231a;
  height: 34px;
  line-height: 36px;
  font-size: 16px;
  vertical-align: middle;
}
.btn-addtocart:hover {
  background: #c91623;
}

//new
.wid {
  width: 1210px;
  height: 330px;
  margin: 0 auto;
}
.wid .mt h3 {
  font-size: 14px;
  color: #666;
}
.goods-list {
  margin-top: 15px;
  width: 1210px;
}
.goods-list ul {
  display: inline-block;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-list li {
  margin-bottom: 40px;
}
.goods-list .item {
  width: 270px;
}

.item {
  position: relative;
  // width: 320px;
  background: #fff;
  overflow: hidden;
  margin: 0 40px 0 0;
  .p-img {
    width: 98px;
    margin-right: 10px;
    float: left;
    border: 1px solid #eee;
    overflow: hidden;
  }
  .p-name {
    height: 36px;
    width: 160px;

    line-height: 18px;
    overflow: hidden;
    margin-bottom: 4px;
  }
  .p-price {
    width: 160px;
    height: 19px;
    overflow: hidden;
    text-align: left;
    margin-bottom: 11px;
    strong {
      font-size: 14px;
      color: #d91f20;
      font-family: verdana;
      font-weight: 400;
    }
    em i {
      font-style: normal;
    }
  }
}
/* 分页 */
.block {
  text-align: center;
}
</style>
