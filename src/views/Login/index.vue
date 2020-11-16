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
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >提交</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <Floot />
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
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
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
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
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  height: 120px;
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
  /* background-color: pink; */
  position: absolute;
  top: 5px;
  right: 0px;
}
.login_container .login .login-banner .login_con .ImageTitle img {
  width: 300px;
  height: 130px;
  margin-left: 23px;
  margin-top: 20px;
}

.login_container .login .login-banner .login_con .login-content {
  width: 325px;
  margin-top: 0px;
}
</style>
