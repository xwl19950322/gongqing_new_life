<!-- 快递查询 -->
<template>
  <div>
    <div class="yd_tab01">
        <ul>
            <li>
                <div class="yd_tab01_zi01">
                    <span>快递查询</span>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>快递公司</span>
                    <input placeholder="自动识别快递公司"/>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>订单编号</span>
                    <input placeholder="请输入订单编号"/>
                </div>
            </li>
        </ul>
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