<template>
  <div>
    <div class="pay-outer">
      <div class="pay-header"></div>
      <!-- 订单信息 -->
      <div class="pay-info">
        <p class="pay-info-top">
          <span>订单提交成功，请尽快付款！订单号：132863253269</span>
          <span
            >应付金额<span>{{ price  }}</span
            >元</span
          >
        </p>
        <p class="pay-info-bottom">
          请您在<span> 0{{ h }}时</span> <span>{{ m }}分</span
          ><span>{{ s }}秒</span>内完成支付，否则订单会被自动取消
        </p>
      </div>
      <!-- 订单主体 -->
      <div class="pay-body">
        <!-- logo -->
        <div class="pay-body-logo">
          <img src="./images/logo-jdpay.png" alt="" />
          <img src="./images/notice.png" alt="" />
        </div>
        <!-- 白条 -->
        <div class="pay-body-channel">
          <div class="pay-body-channel-left">
            <p>
              <img src="./images/BAITIAO_2.0.png" alt="" />
              <strong>白条支付</strong>
            </p>
          </div>
          <div class="pay-body-channel-right">
            <div class="channel-right-top">
              <div>一键激活并支付，可享立减优惠</div>
              <div>
                <strong>优惠</strong>
                <span>立减42元</span>
              </div>
              <div>立即开通</div>
            </div>
            <div class="channel-right-bottom">
              <ul>
                <li>
                  <div>不分期</div>
                  <div @click="checkpay(noStages)">{{ noStages }}</div>
                </li>
                <li>
                  <div>3期</div>
                  <div @click="checkpay(threeStage)">{{ threeStage }}</div>
                </li>
                <li>
                  <div>6期</div>
                  <div @click="checkpay(sixStage)">{{ sixStage }}</div>
                </li>
                <li>
                  <div>9期</div>
                  <div @click="checkpay(nineStage)">{{ nineStage }}</div>
                </li>
                <li>
                  <div>12期</div>
                  <div @click="checkpay(twelveStage)">{{ twelveStage }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pay-body-addmethod">
          <span>添加新卡/网银支付</span>
          <div>
            <el-button
              class="paybtn"
              type="info"
              @click="centerDialogVisible = true"
              size="medium"
              >立即支付</el-button
            >
          </div>
        </div>
        <div class="pay-body-paymethod">
          <div>
            <span>
              <img src="./images/PAY-UNION.png" alt="" />
              中国银联
            </span>
            <span>
              <img src="./images/PAY-WEIXIN.png" alt="" />
              微信支付
            </span>
          </div>
        </div>

        <!-- 页脚 -->
        <div class="payfooter">
          <div class="left">Copyright © 2004-2020 lalla.com 版权所有</div>
          <div class="center">
            <img src="./images/copyright.png" alt="" />
          </div>
          <div class="right">
            由硅谷在线（深圳）科技有限公司提供技术支持
          </div>
        </div>
        <el-dialog
          title="扫码支付"
          :visible.sync="centerDialogVisible"
          width="30%"
          center
        >
          <!-- <span>需要注意的是内容是默认不居中的</span> -->
          <span slot="footer" class="dialog-footer">
            <img src="./images/code.png" />
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      totalprice: 177.0,
      time: 2 * 60 * 60 * 1000,
      h: "",
      m: "",
      s: "",
      price: 0,
      centerDialogVisible: false,
    };
  },
  beforeCreate() {
    this.timer = setInterval(() => {
      this.time -= 1000;
      let result = this.formart(this.time);
      // console.log(this.formart(this.time));
      this.h = result.h;
      this.m = result.m;
      this.s = result.s;
    }, 1000);
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 时间转化
    formart(time) {
      let h = parseInt(time / (60 * 60 * 1000));
      let m = parseInt((time - 60 * 60 * 1000) / (1000 * 60));
      let s = parseInt((time % (60 * 1000)) / 1000);
      return {
        h,
        m,
        s,
      };
    },
    // 支付方式
    checkpay(m) {
      this.price = m;
    },
  },
  computed: {
    // 不分期
    noStages() {
      return (this.totalprice / 1).toFixed(2);
    },
    // 三个月
    threeStage() {
      return (this.totalprice / 3).toFixed(2);
    },
    // 六个月
    sixStage() {
      return (this.totalprice / 6).toFixed(2);
    },
    // 9个月
    nineStage() {
      return Math.ceil(this.totalprice / 9).toFixed(2);
    },
    twelveStage() {
      return Math.ceil(this.totalprice / 12).toFixed(2);
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
ul li {
  list-style: none;
  text-decoration: none;
}
.pay-outer {
  max-width: 1000px;
  min-width: 860px;
  margin: 0 auto;
  background: url("./images/bg.jpg");
}
.pay-header {
  height: 80px;
  background: #000;
}
// 订单信息
.pay-info {
  font-size: 14px;
  color: #333;
}
.pay-info-top {
  display: flex;
  justify-content: space-between;
}
.pay-info-top span > span {
  color: #e31613;
}
.pay-info-bottom span {
  color: #e31613;
}
// 支付主体
.pay-body {
  margin-top: 30px;
}

.pay-body-logo img {
  padding-right: 30px;
}
.pay-body-channel {
  width: 930px;
  padding-top: 40px;
  display: flex;
  // align-items: center;
  margin: 0 auto;
  font-size: 16px;
}
.pay-body-channel-left p > img {
  width: 26px;
  height: auto;
  margin: 0 auto;
  margin-right: 8px;
  vertical-align: middle;
}
.channel-right-top {
  display: flex;
  height: 60px;
  line-height: 60px;
  font-size: 12px;
  margin-left: 60px;
  justify-content: space-between;
  align-items: center;
  color: #737373;
}
.channel-right-top div {
  padding-left: 30px;
}
.channel-right-top div strong {
  padding: 2px 8px;
  border: 1px solid #e31613;
  border-radius: 5px;
}
.channel-right-top div span {
  padding-left: 10px;
  color: #e31613;
}
.channel-right-top div strong,
.channel-right-top div:last-child {
  color: #e31613;
}
.channel-right-bottom ul {
  display: flex;
  font-size: 14px;
}
.channel-right-bottom li {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  padding: 4px 15px;
  border: 1px solid rgb(185, 226, 243);
}
.channel-right-bottom li div:first-child {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  opacity: 0.8;
}
.channel-right-bottom li div:last-child {
  font-size: 12px;
  text-align: center;
  padding: 10px;
}
// 网银支付
.pay-body-addmethod {
  margin: 30px 30px;
}
.pay-body-addmethod span {
  color: skyblue;
  font-size: 12px;
  border: 1px solid #ccc;
  padding: 10px 20px;
}
.pay-body-addmethod div {
  margin-top: 20px;
}
.paybtn {
  margin: 20px 0;
  width: 220px;
  height: 50px;
}
// 支付方式
.pay-body-paymethod {
  line-height: 26px;
  background: #fff;
}
.pay-body-paymethod span {
  margin: 20px 40px;
}
.pay-body-paymethod img {
  width: 26px;
  height: 26px;
  vertical-align: middle;
}
.payfooter {
  font-size: 12px;
  color: #ccc;
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding: 30px;
  display: flex;
  justify-content: space-around;
}
</style>
