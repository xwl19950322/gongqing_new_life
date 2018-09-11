<!-- 便民查询 -->
<template>
  <div class="convenient">
      <Thehead title="便民查询">
        <span slot="left" class="header_search">
          <a href="javascript:" class="go_back" @click="$router.back()">
            <i class="icon iconfont" style="margin-right: 15px;">&#xe621;</i>
            <i class="icon iconfont">&#xe64f;</i>  
          </a>
        </span>
        <span slot="right" class="header_login">
            <i class="icon iconfont">&#xe613;</i>
        </span>
      </Thehead>
      <!-- 选项卡内容 -->
      <div class="tab_content">
        <div class="tab_gongqin">
          <div class="gongqin_left">
            <span>共青城市</span>
            <i class="icon iconfont" style="color:red;">&#xe600;</i>
          </div>
          <div class="gongqin_right">
            <i class="icon iconfont" style="color:#27A5E8;">&#xe66a;</i>
          </div>
        </div>
        <yd-tab active-color="#27A5E8" height="35px" font-size="14px" horizontal-scroll v-model="tab2" :prevent-default="false" :item-click="itemClick">
          <yd-tab-panel style="margin-top:5px;" label="个人所得税">
            <div class="yd_tab01">
              <ul>
                <li>
                  <div class="yd_tab01_zi01">
                    <span>个人所得税</span>
                  </div>
                </li>
                <li>
                  <div class="yd_tab01_zi">
                    <span>用户名</span>
                    <input placeholder="身份证/邮箱/个人所得税账号"/>
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
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="快递查询">
            <Courier/>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="停电信息">
            <Power/>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="养老保险">
            <Provide/>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="医保">
            <Health/>
          </yd-tab-panel>
        </yd-tab>
      </div>
  </div>
</template>

<script>
import Thehead from "../../components/HeaderTop/Thehead";
import Courier from '../../page/convenience/Courier';
import Power from '../../page/convenience/Power';
import Provide from '../../page/convenience/Provide';
import Health from '../../page/convenience/Health';
export default {
  name: "",
  components: { Thehead ,Courier,Power,Provide,Health },
  data() {
    return {
      tab2: 0
    };
  },
  props: {},
  computed: {},
  methods: {
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
      }, 1000);
    }
  },
  watch: {},
  created() {}
};
</script>

<style scoped>
.convenient {
  width: 100%;
  overflow: hidden;
}
.go_back {
  display: flex;
}
.iconfont {
  font-size: 20px;
}
.tab_content {
  margin-top: 45px;
}
.tab_gongqin {
  display: flex;
  position: relative;
}
.gongqin_left {
  margin-left: 8px;
}
.gongqin_left span {
  font-size: 14px;
  font-weight: bold;
  font-family: "NSimSun";
  margin-right: 8px;
}
.gongqin_right {
  position: absolute;
  right: 8px;
}

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
input{
border: none;
margin-left: 15%;
}
.verification{
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}
.verification_left{
  display: flex;
  align-items: center;
}
.verification_right{
  border-radius: 5px;
  border: 1px solid #D1D0D0;
}
.verification_input{
  width: 55%;
  height: 30px;
  margin-left:10px;
  border: 1px solid #27A5E8;
  border-radius: 5px;
}
.login_button{
  text-align: center;
}
.login_button button{
  border: none;
  width: 80%;
  height: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #27A5E8;
}
</style>