<template>
  <div class="login_container">
    <div class="login">
      <div class="login_tltle">
        <img src="./images/header_logo.png" alt="" />
        <b class="login"></b>
        <a
          href="https://surveys.jd.com/index.php?r=survey/index/sid/568245/lang/zh-Hans"
          class="login_aa"
        >
          <p></p>
          <span>登录页面，调查问卷</span>
        </a>
      </div>
      <!-- 安全 -->
      <div class="cont-wrapper">
        <i class="icon-tips"></i>
        <p class="cont_tltle">
          依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
          新版<a href="https://about.jd.com/privacy/" target="_blank"
            >《京东隐私政策》</a
          >
          已上线，将更有利于保护您的个人隐私。
        </p>
      </div>
      <!-- 大图片 -->
      <div class="login-banner">
        <div class="login_bg">
          <div class="login_con">
            <div class="ImageTitle">
              <img src="./images/header_logo.png" alt="" />
            </div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="账号密码" name="first">
                <div class="login-content">
                  <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                  >
                    <el-form-item label="账号" prop="age">
                      <el-input v-model.number="ruleForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                      <el-input
                        type="password"
                        v-model="ruleForm.pass"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                      <el-input
                        type="password"
                        v-model="ruleForm.checkPass"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        :disabled="disable"
                        type="primary"
                        @click="submitForm('ruleForm')"
                        >提交</el-button
                      >
                      <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-tab-pane>
              <el-tab-pane label="验证码登录" name="second">
                <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                  style="margin-right:25px"
                >
                  <el-form-item label="邮箱" prop="email">
                    <el-input
                      type="email"
                      v-model="ruleForm.email"
                      autocomplete="off"
                      style="margin-bottom:5px"
                    ></el-input>
                    <el-button
                      type="primary"
                      @click="sendCode('ruleForm')"
                      disabled
                      >发送验证码</el-button
                    >
                  </el-form-item>
                  <el-form-item label="确认验证码" prop="checkemail">
                    <el-input
                      type="text"
                      v-model="ruleForm.checkemail"
                      autocomplete="open"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="goLogin('ruleForm')"
                      >提交</el-button
                    >
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { getEmailCode, getCheckCode } from "../../api";
const config = {
  errorBagName: "errorBags",
  fieldsBagName: "fieldBags",
};
Vue.use(VeeValidate, config);
export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
        this.disable = true;
      } else {
        callback();
        this.disable = false;
      }
    };
    return {
      activeName: "first",
      disable: true,
      ruleForm: {
        pass: "1234",
        checkPass: "1234",
        age: "13800",
        email: "",
        checkemail: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const usermail = this.ruleForm.age;
          const password = this.ruleForm.pass;
          // const result = await getPassWord(usermail, password);
          this.$store
            .dispatch("getPassWord", { usermail, password })
            .then(() => {
              this.$router.push({ name: "shop", params: { usermail } });
            })
            .catch(() => {
              alert("密码错误");
            });
          // if (result.code === 20000) {
          //   this.$router.push({ name: "shop", params: { usermail } });
          // } else {
          //   alert("密码有误");
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
    async sendCode(formName) {
      if (this.ruleForm.email) {
        const usermail = this.ruleForm.email.trim();
        const result = await getEmailCode({ usermail });
        if (result.code === 20000) {
          alert("邮件发送成功");
        } else {
          alert("密码有误");
        }
      }
    },
    async goLogin(formName) {
      if (this.ruleForm.checkemail) {
        const usermail = this.ruleForm.email;
        const code = this.ruleForm.checkemail;
        const result = await getCheckCode(usermail, code);
        if (result.code === 20000) {
          this.$router.push({ name: "shop", params: { usermail } });
        } else {
          alert("验证码有误");
        }
      }
    },
  },
};
</script>
<style scoped>
.login_container {
  width: 100%;
}
.login_container .login {
  width: 100%;
  /* background-color: pink; */
}
.login .login_tltle {
  width: 996px;
  height: 82px;
  /* background-color: red; */
  margin: 0 auto;
  display: flex;
  position: relative;
}
.login .login_tltle > img {
  width: 141px;
  height: 52px;
  margin: 20px 0 0 0px;
}
.login .login_tltle .login {
  width: 110px;
  height: 40px;
  font-size: 25px;
  margin: 32px 0 0 20px;
  background: url("./images/登录.png") center no-repeat;
}
.login .login_tltle .login_aa {
  display: block;
  margin: 0 5px;
  background: url(//misc.360buyimg.com/user/passport/1.0.0/css/i/q-icon.png)
    no-repeat;
  overflow: hidden;
  color: #999;
  position: absolute;
  top: 39px;
  right: 0px;
  padding-left: 20px;
}
.cont-wrapper {
  width: 100%;
  height: 38px;
  background: #fff8f0;
}
.cont-wrapper .cont_tltle {
  text-align: center;
  line-height: 38px;
  font-size: 13px;
}
.cont-wrapper .cont_tltle .icon-tips {
  background: url("./images/！.png");
  width: 16px;
  height: 16px;
}
.login-banner {
  width: 100%;
  height: 475px;
  height: 475px;
  background: #a11f1d;
}
.login_container .login .login-banner .login_bg {
  position: relative;
  width: 990px;
  height: 475px;
  margin: 0 auto;
  background: url("./images/京东.jpg") center no-repeat;
}

.login_container .login .login-banner .login_con {
  width: 346px;
  height: 436px;
  background-color: pink;
  position: absolute;
  top: 5px;
  right: 0px;
}

.login_container .login .login-banner .login_con .login-content {
  width: 325px;
  margin-top: 20px;
}
.login_container .login .login-banner .login_con .ImageTitle img {
  width: 346px;
  margin-top: 10px;
}
</style>
