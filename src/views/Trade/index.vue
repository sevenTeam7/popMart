<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="(user, index) in userInfo"
        :key="index"
      >
        <span
          class="username "
          :class="{ selected: index === currentIndex }"
          @click="btnUser(index)"
          >{{ user.username }}
        </span>
        <p>
          <span class="s1">{{ user.address }}</span>
          <span class="s2">{{ user.phone }}</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <div>
          <span class="username selected ">在线支付</span>
          <span class="username" style="margin-left:5px;">货到付款</span>
        </div>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">硅谷快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="(item, index) in delSelectedCart"
          :key="index"
        >
          <li>
            <img v-lazy="item.smallImg" alt="" />
          </li>
          <li>
            <p>
              {{ item.title }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ item.price * item.skunum }}</h3>
          </li>
          <li>
            <span>X{{ item.skunum }}</span>
          </li>
          <li><span>有货</span></li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
          v-model="orderComment"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ totalCartNum }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ totalCartPrice }}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额: <span>¥{{ totalCartPrice }}</span>
      </div>
      <div class="receiveInfo" v-if="userInfo[currentIndex]">
        寄送至:
        <span>{{ userInfo[currentIndex].address }}</span>
        收货人：<span>{{ userInfo[currentIndex].username }}</span>
        <span>{{ userInfo[currentIndex].phone }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <router-link class="subBtn" to="/pay">提交订单</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import state from "@/store/state";
export default {
  name: "Trade",
  data() {
    return {
      // 当前点击的下标
      currentIndex: 0,
      orderComment: "老板,受不了啦,快点发货,等不急啦", // 订单的备注
    };
  },
  async mounted() {
    // 获取商品列表信息
    await this.getCartList();
    // 获取收件人信息
    this.$store.dispatch("getUserInfo");
  },

  methods: {
    getCartList() {
      this.$store.dispatch("getCartList");
    },
    // 获取当前点击的下标，改变样式的显示
    btnUser(index) {
      this.currentIndex = index;
    },
  },

  computed: {
    ...mapState({
      userInfo: (state) => state.trade.userInfo,
    }),
    // 通过辅助函数拿到vuex中getters中获取的选中商品信息
    ...mapGetters(["delSelectedCart", "totalCartPrice", "totalCartNum"]),
  },
};
</script>

<style lang="less" scoped>
.title {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 21px;
  padding-top: 20px;
}
.content {
  width: 1200px;
  margin: 10px auto 0;
  border: 1px solid #dddddd;
  padding: 25px;
  box-sizing: border-box;
}
.content .receive,
.content .pay {
  line-height: 36px;
  margin: 18px 0;
}
.content .address {
  padding-left: 20px;
  margin-bottom: 15px;
}
.address {
  display: flex;
  flex-direction: column;
}
.content .address .username {
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  position: relative;
}
.content .address .username::after {
  content: "";
  display: none;
  width: 13px;
  height: 13px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url(./images/choosed.png) no-repeat;
}
.content .address .username.selected {
  border-color: #e1251b;
}
.content .address .username.selected::after {
  display: block;
}
.content .address p {
  width: 610px;
  float: left;
  line-height: 30px;
  margin-left: 10px;
  padding-left: 5px;
  cursor: pointer;
}
.content .address p .s1 {
  float: left;
  padding-left: 20px;
}
.content .address p .s2 {
  float: left;
  margin: 0 5px;
}
.content .address p .s3 {
  float: left;
  width: 56px;
  height: 24px;
  line-height: 24px;
  margin-left: 10px;
  background-color: #878787;
  color: #fff;
  margin-top: 3px;
  text-align: center;
}
.content .address p:hover {
  background-color: #ddd;
}
.content .line {
  height: 1px;
  background-color: #ddd;
}
.content .way {
  width: 1080px;
  height: 110px;
  background: #f4f4f4;
  padding: 15px;
  margin: 0 auto;
}
.content .way h5 {
  line-height: 50px;
}
.content .way .info {
  margin-top: 20px;
}
.content .way .info .s1 {
  float: left;
  border: 1px solid #ddd;
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 10px;
}
.content .way .info p {
  line-height: 30px;
}
.content .detail {
  width: 1080px;
  background: #feedef;
  padding: 15px;
  margin: 2px auto 0;
}
.content .detail h5 {
  line-height: 50px;
}
.content .detail .list {
  display: flex;
  justify-content: space-between;
}
.content .detail .list li {
  line-height: 30px;
}
.content .detail .list li p {
  width: 684px;
  padding-left: 30px;
  margin-bottom: 20px;
}
.content .detail .list li h4 {
  padding-left: 30px;
  color: #c81623;
  font-weight: 400;
}
.content .detail .list li h3 {
  width: 57px;
  // padding-left: 30px;
  color: #e12228;
}

.content .bbs {
  margin-bottom: 15px;
}
.content .bbs h5 {
  line-height: 50px;
}
.content .bbs textarea {
  width: 100%;
  border-color: #e4e2e2;
  line-height: 1.8;
  outline: none;
  resize: none;
}
.content .bill h5 {
  line-height: 50px;
}
.content .bill div {
  padding-left: 15px;
}
.money {
  width: 1200px;
  margin: 20px auto;
  padding-bottom: 100px;
}
.money ul {
  width: 220px;
  float: right;
}
.money ul li {
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.money ul li i {
  color: red;
}
.trade {
  box-sizing: border-box;
  width: 1200px;
  padding: 10px;
  margin: 10px auto;
  text-align: right;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
}
.trade div {
  line-height: 30px;
}
.trade .price span {
  color: #e12228;
  font-weight: 700;
  font-size: 14px;
}
.trade .receiveInfo {
  color: #999;
}
.sub {
  width: 1200px;
  margin: 0 auto 10px;
}
.sub .subBtn {
  float: right;
  width: 164px;
  height: 56px;
  font: 700 18px "微软雅黑";
  line-height: 56px;
  text-align: center;
  color: #fff;
  background-color: #e1251b;
}
</style>
