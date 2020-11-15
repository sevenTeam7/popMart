<template>
  <div class="guarantee">
    <div class="mt">
      <h3>售后保障</h3>
    </div>
    <div class="mc">
      <!-- 保障 -->
      <div class="serve-agree-bd">
        <div class="item-detail">
          <div class="serve-agree-bd">
            <dl>
              <dt>
                <i class="goods"></i>
                <strong>厂家服务</strong>
              </dt>
              <dd>
                京东售后质保
              </dd>
            </dl>
          </div>
        </div>
        <div class="item-detail">
          <div class="serve-agree-bd">
            <dl>
              <dt>
                <i class="goods"></i>
                <strong>京东承诺</strong>
              </dt>
              <dd>
                注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
              </dd>
            </dl>
          </div>
        </div>
        <div class="item-detail">
          <div class="serve-agree-bd">
            <dl>
              <dt>
                <i class="goods"></i>
                <strong> 正品行货 </strong>
              </dt>
              <dd>
                京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。
              </dd>
            </dl>
          </div>
        </div>
        <div class="item-detail">
          <div class="serve-agree-bd">
            <dl>
              <dt>
                <i class="goods"></i>
                <strong> 全国联保 </strong>
              </dt>
              <dd>
                凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <!-- 声明 -->
      <div class="state">
        <strong>权利声明：</strong>
        <br />
        京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。
        <p>
          <b>注：</b>
          本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。
        </p>
        <br />
        <strong>价格说明：</strong>
        <br />
        <p>
          <b>京东价：</b>
          京东价为商品的销售价，是您最终决定是否购买商品的依据。
        </p>
        <p>
          <b>划线价：</b>
          商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
        </p>
        <p>
          <b>折扣：</b>
          如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
        </p>
        <p>
          <b>异常问题：</b>
          商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AfterSale",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
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
            background-image: url("../images/__sprite2.png");
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
</style>
