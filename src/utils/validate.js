import Vue from 'vue'
import VeeValidate,{ Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN.js'
Vue.use(VeeValidate);

VeeValidate.Validator.localize(Validator.locale,{
  messages: zh_CN.messages,
  attributes:{
    usermail:'邮箱账号',
      password:'密码'
  }
});
VeeValidate.Validator.extend('usermail', {
  getMessage: field => `请输入正确的`+field,
  validate: value =>{
      const reg = /^\d{5,12}@[qQ][qQ]\.(com|cn)$/;
      return reg.test(value) 
  }  
});
/* VeeValidate.Validator.extend('code1', {
  getMessage: field => `请输入正确的`+field,
  validate: value =>{
      const reg = /(^\d{6})$/;
      return reg.test(value) 
  }  
}); */
VeeValidate.Validator.extend('password', {
  getMessage: field => field+`由大写/小写/数字组成`,
  validate: value =>{
      const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;
      return reg.test(value) 
  }  
});
