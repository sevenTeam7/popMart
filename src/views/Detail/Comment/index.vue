<template>
  <div class="comment-item" style="padding: 15px;display: flex;">
    <div class="user-column" style="width:140px;float: left;">
      <div class="user-info" style="width:140px">
        <img
          src="../images/user.jpg"
          alt=""
          style="border-radius: 50%;vertical-align: middle;"
          width="25"
          height="25"
        />
        魅力天府麻辣熊猫
      </div>
      <div class="user-level" style="margin-top:10px">
        <a
          href="#"
          class="comment-plus-icon"
          style="background: rgb(65, 65, 65);color: rgb(255, 243, 143);border-radius: 1px;
                              padding: 0px 4px;
                              text-decoration: none;
                              font-size: 12px;
                              line-height: 18px;
                              "
          >PLUS会员</a
        >
      </div>
    </div>
    <div class="comment-column">
      <div
        class="comment-star"
        style="margin-bottom:10px;height: 14px;background: url('../images/star.png') no-repeat; background-position: 0px 0px;  width: 78px;"
      ></div>
      <p class="comment-con">
        孩子们很喜欢，希望收集这款POPMART泡泡玛特
        Molly校园系列盲盒公仔潮玩桌面摆件，
        Molly校园-单个盲盒每次都有意外惊喜，看上去很可爱，这个系列让孩子们兴致勃勃，充满童真，看到他们喜欢就可以了，太有意思了。物流给力，谢谢！
      </p>
      <div class="pic-list">
        <img
          src="../images/commont1.jpg"
          alt=""
          width="48"
          height="48"
          style="margin-right: 6px;vertical-align: middle;"
        />
        <img
          src="../images/commont2.jpg"
          alt=""
          width="48"
          height="42"
          style="vertical-align: middle;"
        />
      </div>
      <div class="comment-message">
        <div class="order-info" style="margin-top: 10px; color:#999">
          <span style="margin-right:95px">
            Molly校园-单个盲盒（随机发不支持退货）
          </span>
          <span>
            2020-06-30 17:19
          </span>
          <span style="margin-left:200px">举报</span>
          <span style="margin-left:30px">
            <i
              class="sprite-praise"
              style="display:inline-block;margin-right: 5px;background-image: url('../images/__sprite3.png');background-position: -32px -34px;width: 16px;height: 16px;"
            ></i>
            <span style="position:relative;top:-2px">1</span>
          </span>
          <span style="margin-left:30px;"
            ><i
              class="sprite-praise"
              style="display:inline-block;margin-right: 5px;background-image: url('../images/__sprite3.png');background-position: -48px -34px;width: 16px;height: 16px;"
            ></i>
            <span style="position:relative;top:-2px">9</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Comment",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.comment-item {
  border-bottom: solid #ccc 1px;
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
              background-image: url("../images/__sprite3.png");
            }
            .sprite-comment {
              display: inline-block;
              background-position: -48px -34px;
              width: 16px;
              height: 16px;
              background-image: url("../images/__sprite3.png");
            }
          }
        }
      }
    }
  }
}
</style>
