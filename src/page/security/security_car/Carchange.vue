<!-- 机动车变更登记 -->
<template>
  <div>
    <div class="yd_tab01">
        <ul>
            <li>
                <div class="yd_tab01_zi01">
                    <span>机动车变更</span>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>姓名</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input placeholder="请输入身份证本名"/>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>证件号</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input placeholder="请输入您的身份证"/>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>所在地区</span>
                    <div class="address">
                        <yd-cell-group>
                            <yd-cell-item arrow>
                                <input style="font-size: 12px;" slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择详细地址">
                            </yd-cell-item>
                        </yd-cell-group>
                        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
                    </div>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>手机号码</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input placeholder="请输入手机号码"/>
                </div>
            </li>
            <li>
                <div class="yd_tab01_zi">
                    <span>待变更车牌号</span>
                    <input placeholder="请输入您的原车牌号" style="margin-left: 11%;"/>
                </div>
            </li>
        </ul>
        <!-- 登录按钮 -->
        <div class="login_button">
            <button>申请</button>
        </div>
    </div>
  </div>
</template>

<script>
/* 前提是已经安装了 ydui-district */
import District from "ydui-district/dist/jd_province_city_area_id";
export default {
  name: "",
  components: {},
  data() {
    return {
      show1: false,
      model1: "",
      district: District
    };
  },
  props: {},
  computed: {},
  methods: {
    // 城市三级联动
    result1(ret) {
      this.model1 = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    }
  },
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
  display: flex;
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
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

/* 城市三级联动 */
.address {
  margin-left: 10%;
}
</style>