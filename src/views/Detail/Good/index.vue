<template>
  <li>
    <div class="pro-wrap">
      <div class="p-img">
        <a href="javascript:;">
          <img :src="goodObj.bigImg[0]" alt="" height="220" width="220" />
        </a>
      </div>
      <div class="p-name">
        <a href="javascript:;">
          {{ goodObj.title }}
        </a>
      </div>
      <div class="p-price">
        <a href="#" class="p-focus">
          <i class="i-focus"></i>
          <em class="text">关注</em>
        </a>
        <strong class="price">
          <span>￥{{ goodObj.price }}</span>
        </strong>
      </div>
      <div class="p-comment">
        <div class="inner"></div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "Good",
  props: {
    goodObj: Object,
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
li {
  // margin-right: 20px;

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
          background: url("../images/i-focus.png") no-repeat;
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
</style>
