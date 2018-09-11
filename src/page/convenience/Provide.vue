<!-- 养老保险 -->
<template>
  <div>
    <div class="yd_tab01">
      <ul>
        <li>
          <div class="yd_tab01_zi01">
            <span>养老保险</span>
          </div>
        </li>
        <li>
          <div class="yd_tab01_zi">
            <span>用户名</span>
            <input placeholder="身份证/邮箱/养老保险账号"/>
          </div>
        </li>
        <li>
          <div class="yd_tab01_zi">
            <span>姓名</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="请输入您的姓名"/>
          </div>
        </li>
        <li>
          <div class="yd_tab01_zi">
            <span>密码</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="请输入您的登录密码"/>
          </div>
        </li>
      </ul>
      <!-- 验证码 -->
      <div class="verification">
        <div class="verification_left">
          <span>验证码</span>
          <input type="text" class="verification_input"/>
        </div>
        <div class="verification_right">
          <img src="static/images/captcha.svg"/>
        </div>
      </div>
      <!-- 登录按钮 -->
      <div class="login_button">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
  watch: {},
  created() {}
};
</script>

<style scoped>
/* 内容 */
.yd_tab01 {
  margin-left: 5px;
  margin-right: 5px;
  background-color: #fff;
}
.yd_tab01_zi01 span {
  font-size: 14px;
}
.yd_tab01_zi01 {
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #efefef;
}
.yd_tab01_zi {
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #efefef;
}
input {
  border: none;
  margin-left: 15%;
}
.verification {
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}
.verification_left {
  display: flex;
  align-items: center;
}
.verification_right {
  border-radius: 5px;
  border: 1px solid #d1d0d0;
}
.verification_input {
  width: 55%;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #27a5e8;
  border-radius: 5px;
}
.login_button {
  text-align: center;
}
.login_button button {
  border: none;
  width: 80%;
  height: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #27a5e8;
}
</style>