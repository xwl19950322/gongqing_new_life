<!-- 特色模板 -->
<template>
  <div class="convenient">
    <Thehead title="特色版块">
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
          <yd-tab-panel style="margin-top:5px;" label="大学创业">
            <div class="yd_tab01">
              <ul>
                <li>
                  <div class="yd_tab01_zi01">
                    <span>大学生创业贷款</span>
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
                    <span>贷款额度</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input placeholder="请输入您要贷款的额度"/>
                  </div>
                </li>
                <li>
                  <div class="yd_tab01_zi">
                    <span>贷款期限</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input placeholder="按整月记录"/>
                  </div>
                </li>
              </ul>
              <!-- 登录按钮 -->
              <div class="login_button">
                <button>申请</button>
              </div>
            </div>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="企业融资">
            <Financing/>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="企业展示">
            <Enterprise/>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="园区地图">
            <Yuanditu :mapHeight="350" :longitude="115.808154" :latitude="29.285191"/>
          </yd-tab-panel>
          <yd-tab-panel style="margin-top:5px;" label="招商资讯">
            <Investment/>
          </yd-tab-panel>
        </yd-tab>
    </div>
  </div>
</template>

<script>
import Thehead from "../../components/HeaderTop/Thehead";
import Financing from "../../page/features/features_cunter/financing";
import Yuanditu from "../../page/features/features_cunter/Yuanditu";
import Enterprise from "../../page/features/features_cunter/Enterprise";
import Investment from "../../page/features/features_cunter/Investment";
import District from "ydui-district/dist/jd_province_city_area_id";
export default {
  name: "",
  components: {
    Thehead,
    Financing,
    Yuanditu,
    Enterprise,
    Investment
  },
  data() {
    return {
      tab2: 0,
      show1: false,
      model1: "",
      district: District
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
    },
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
.convenient {
  width: 100%;
  overflow: hidden;
}
.go_back {
  display: flex;
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