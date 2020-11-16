<template>
  <div class="trade-container">
   <Header />
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div class="address clearFix">
        <p>
          <span class="username selected">xx</span>
          <span class="s1">xxxxxxxxxxxxxxx</span>
          <span class="s2">xxxxxxx</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="address clearFix">
        <p>
          <span class="username">xx</span>
          <span class="s1">xxxxxxxxxxxxxxx</span>
          <span class="s2">xxxxxxx</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="address clearFix">
        <p>
          <span class="username">xx</span>
          <span class="s1">xxxxxxxxxxxxxxx</span>
          <span class="s2">xxxxxxx</span>
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
        <ul class="list clearFix">
          <li>
            <img
              src="http://img20.360buyimg.com/n0/s80x80_jfs/t1/114946/23/1673/137342/5e9acd0cE88617e26/d3812d623af176c4.jpg.dpg"
              alt=""
            />
          </li>
          <li>
            <p>
              POPMART泡泡玛特 DIMOO徽章-太空系列盲盒胸针摆件潮流玩具生日礼物
              DIMOO太空徽章-单个盲盒（随机发不支持退）
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥100.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul>
        <ul class="list clearFix">
          <li>
            <img
              src="http://img20.360buyimg.com/n0/s80x80_jfs/t1/114946/23/1673/137342/5e9acd0cE88617e26/d3812d623af176c4.jpg.dpg"
              alt=""
            />
          </li>
          <li>
            <p>
              POPMART泡泡玛特 DIMOO徽章-太空系列盲盒胸针摆件潮流玩具生日礼物
              DIMOO太空徽章-单个盲盒（随机发不支持退）
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥100.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
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
          <b><i>1</i>件商品，总商品金额</b>
          <span>¥5399.00</span>
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
      <div class="price">应付金额: <span>¥5399.00</span></div>
      <div class="receiveInfo">
        寄送至:
        <span>北京市昌平区宏福科技园综合楼6层</span>
        收货人：<span>张三</span>
        <span>15010658793</span>
      </div>
    </div>
    <div class="sub clearFix">
      <router-link class="subBtn" to="/pay">提交订单</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trade",
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
  margin-bottom: 20px;
}
.content .detail .list li h4 {
  color: #c81623;
  font-weight: 400;
}
.content .detail .list li h3 {
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
