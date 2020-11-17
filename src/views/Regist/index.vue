<template>
  <div class="register-container">
    <el-button type="text"></el-button>
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>邮箱:</label>
        <input
          type="text"
          v-model="usermail"
          name="usermail"
          v-validate="'required|usermail'"
          placeholder="请输入你的邮箱"
        />
        <span style="color: red">{{ errors.first("usermail") }}</span>
      </div>

      <div class="content">
        <label>登录密码:</label>
        <input
          type="text"
          v-model="password"
          v-validate="'required|password'"
          name="password"
          placeholder="请输入登录密码"
        />
        <span style="color: red">{{ errors.first("password") }}</span>
      </div>

      <!-- <div class="content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" />
      </div> -->
      <!-- <div class="content">
        <label>验证码:</label>
        <input
          type="text"
          v-model="code"
          v-validate="'required|code1'"
          name="code"
          placeholder="请输入验证码"
        />
        <el-button type="danger" round>点击获取验证码</el-button><br>
         <span style="color: red; paddingLeft:100px">{{ errors.first("code") }}</span>
      </div> -->

      <div class="controls">
        <input name="m1" type="checkbox" />
        <span>同意协议并注册《popMart用户协议》</span>
      </div>
      <div class="btn">
        <a href="javascript:" @click="registSuccess">完成注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {
      usermail: "", //邮箱
      password: "", //密码
    };
  },
  mounted() {
    this.$alert("在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）", "popMart用户协议", {
      confirmButtonText: "确定",
      showClose:false
    });
  },
  methods: {
    async registSuccess() {
      const { usermail, password } = this;
      const result = await this.$API.reqRegist(usermail, password);
      console.log(result);
      if (result.code === 2000) {
        await this.$message.success("注册成功");
        this.$router.push("/views/cartasyc");
      } else {
        this.$message.error("注册失败，请重新再试");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;
    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      // text-align: center;
      padding-left: 390px;
      margin-bottom: 18px;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }
    }

    .controls {
      text-align: center;

      input {
        vertical-align: middle;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      a {
        text-decoration: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
