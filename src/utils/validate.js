import Vue from 'vue'
import VeeValidate,{ Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN.js'
Vue.use(VeeValidate);

VeeValidate.Validator.localize(Validator.locale,{
  messages: zh_CN.messages,
  attributes:{
      email:'邮箱账号'
  }
});
VeeValidate.Validator.extend('email', {
  getMessage: field => `请输入正确的`+field,
  validate: value =>{
      const reg = /^\d{5,12}@[qQ][qQ]\.(com|cn)$/;
      return reg.test(value) 
  }  
});