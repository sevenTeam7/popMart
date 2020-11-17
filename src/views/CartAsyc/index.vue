<template>
  <div>
    <Header />

    <div class="cart-container">
      <div class="cart-header">
        <h2>全部商品</h2>
      </div>
      <div class="cart-nav">
        <div class="cart-nav-01">选中</div>
        <div class="cart-nav-02">商品</div>
        <div class="cart-nav-03">单价</div>
        <div class="cart-nav-04">数量</div>
        <div class="cart-nav-05">小计</div>
        <div class="cart-nav-06">操作</div>
      </div>
      <div class="cart-color">
        <ul
          class="cart-main"
          v-for="(item, index) in cartList"
          :key="item.skuid"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              :checked="item.ischecked"
              @change="swicthIscheked(item)"
              name="chk_list"
            />
          </li>

          <li class="cart-list-con2">
            <img
              src="http://img20.360buyimg.com/n0/s80x80_jfs/t1/114946/23/1673/137342/5e9acd0cE88617e26/d3812d623af176c4.jpg.dpg"
              alt=""
            />
            <div class="cart-font">
              {{ item.title }}
            </div>
          </li>
          <li class="cart-list-con3">
            <span>￥{{ item.price }}</span>
          </li>

          <li class="cart-list-con4">
            <el-input-number
              size="mini"
              :min="0"
              @change="changeCount($event, item)"
              :value="item.skunum"
            ></el-input-number>
            <!--  <a
              href="javascript:void(0)"
              @click="changeCount(item, -1)"
              class="mins"
              >-</a
            >
            <input
              autocomplete="off"
              @change="changeCount(item, $event.target.value * 1 - item.skunum)"
              type="text"
              :value="item.skunum"
              minnum="1"
              class="itxt"
            />
            <a
              href="javascript:void(0)"
              @click="changeCount(item, 1)"
              class="plus"
              >+</a
            > -->
          </li>

          <li class="cart-list-con5">
            <span>{{ item.price * item.skunum }}</span>
          </li>
          <li class="cart-list-con6">
            <a href="javascript:void(0)" class="sindelet" @click="delCart(item.skuid)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
      <div class="cart-tool">
        <div class="select-all">
          <input class="chooseAll" type="checkbox" />
          <span>全选</span>
        </div>
        <div class="option">
          <a href="#none">删除选中的商品</a>
          <a href="#none">移到我的关注</a>
          <a href="#none">清除下柜商品</a>
        </div>
        <div class="money-box">
          <div class="chosed">
            已选择 <span>{{ totalCartNum }}</span
            >件商品
          </div>
          <div class="sumprice">
            <em>总价（不含运费） ：</em>
            <i class="summoney">{{ totalCartPrice }}</i>
          </div>
          <div class="sumbtn">
            <router-link class="sum-btn" to="/views/trade">结算</router-link>
            <!-- <a class="sum-btn" href="###" target="_blank">结算</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/component/Header";
import { mapState, mapGetters } from "vuex";
export default {
  name: "CartAsyc",
  components: {
    Header,
  },
  data() {
    return {};
  },
  mounted() {
    // 获取购物车商品信息
    this.getCartList();
  },
  methods: {
    // 获取购物车信息
    getCartList() {
      this.$store.dispatch("getCartList");
    },
    // 改变商品数量 自定义样式
    /*   changeCount(item, num) {
      if (item.skunum + num > 0) {
        this.$store.dispatch("getCartNum", {
          skuid: item.skuid,
          skunum: num,
        });
      }
    }, */
    // 改变商品数量 组件样式方法
    changeCount(num, item) {
      this.$store.dispatch("getCartNum", {
        skuid: item.skuid,
        skunum: num - item.skunum,
      });
    },
    // 改变选中状态
    swicthIscheked(item) {
      const {skuid} = item
      console.log(skuid);
      const isChecked = item.ischecked === 1 ? 0 : 1;
      this.$store.dispatch('getIschecked',{
        skuid,
        ischecked:isChecked
      })
      this.getCartList()
    },
    // 删除商品信息
    delCart(skuid){
      this.$store.dispatch('getDeleteCart',skuid)
      this.getCartList()
    }
  },
  computed: {
    ...mapState({
      cartList: (state) => state.cart.cartList,
    }),
    ...mapGetters(["totalCartNum", "totalCartPrice"]),
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.cart-container {
  width: 1200px;
  margin: 20px auto;
}
.cart-header {
  color: red;
}

.cart-nav {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-left: 10px;
  background-color: #f3f3f3;
  height: 30px;
}
.cart-color {
  background-color: #fff4e8;
  border: 1px solid #ddd;
}
.cart-main {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.cart-nav-01 {
  width: 14.3%;
}
.cart-nav-02 {
  width: 28.6%;
}
.cart-nav-03 {
  width: 14.3%;
}
.cart-nav-04 {
  width: 14.3%;
}
.cart-nav-05 {
  width: 14.3%;
}
.cart-nav-06 {
  width: 14.3%;
}

.cart-list-con1 {
  margin-left: 20px;
}
.cart-list-con2 {
  display: flex;
  font-size: 10px;
  margin-left: 30px;
  width: 37%;
}
.cart-list-con3 {
  width: 12%;
}
.cart-list-con4 {
  width: 12%;
 /*  .mins {
    border: 1px solid #ddd;
    border-right: 0;
    float: left;
    color: #666;
    width: 6px;
    text-align: center;
    padding: 8px;
  }

  input {
    border: 1px solid #ddd;
    width: 40px;
    height: 33px;
    float: left;
    text-align: center;
    font-size: 14px;
  }

  .plus {
    border: 1px solid #ddd;
    border-left: 0;
    float: left;
    color: #666;
    width: 6px;
    text-align: center;
    padding: 8px;
  } */
}
.cart-list-con5 {
  width: 15%;
  padding-left: 60px;
}
.cart-list-con6 {
  width: 12%;
}

.cart-list-con2 .cart-font {
  margin-left: 10px;
  width: 75%;
}
.cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
  padding-top: 10px;
}
.cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart-tool .select-all span {
  vertical-align: middle;
}
.cart-tool .select-all input {
  vertical-align: middle;
}
.cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
}
.cart-tool .money-box {
  float: right;
}
.cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}
.cart-tool .money-box .sumprice {
  width: 200px;
  line-height: 22px;
  float: left;
  padding: 0 10px;
}
.cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}
.cart-tool .money-box .sumbtn {
  float: right;
}
.cart-tool .money-box .sumbtn a {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
  overflow: hidden;
}
</style>
