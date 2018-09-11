<!-- 功能发现组件 -->
<template>
  <div style="overflow: hidden;margin-bottom: 55px;">
    <HeaderTop title="功能发现"/>
    <div class="found_page">
      <!-- 搜索 -->
      <div class="search">
        <yd-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
      </div>
      <!-- 功能图标 -->
      <div class="found_icon" v-for="(founds,index) in 6" :key="index">
        <div class="stars_icon">
          <img src="static/images/stars.png"/>
          <h3>***功能***</h3>
          <img src="static/images/stars.png"/>
        </div>
        <!--  -->
        <div class="all_choose">
          <ul class="choose_ul">
            <li v-for="(choose ,index) in 5" :key="index">
              <div>
                <div>
                  <i class="icon iconfont">&#xe67b;</i>
                </div>
                <div class="icon_sp">
                  <span>icon矢量图</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  name: "",
  components: { HeaderTop },
  data() {
    return {
      value2: "",
      result: []
    };
  },
  props: {},
  computed: {},
  methods: {
    getResult(val) {
      if (!val) return [];
      return [
        "QQ",
        "微信",
        "共青城市",
        "九江市",
        "淘宝",
        "京东",
        "音乐",
        "斗地主",
        "eID",
        "小程序",
        "斗鱼直播",
        "虎牙直播",
        "腾讯视频",
        "新浪微博",
        "城市",
        "火车"
      ].filter(value => new RegExp(val, "i").test(value));
    },
    itemClickHandler(item) {
      this.$dialog.toast({ mes: `搜索：${item}` });
    },
    submitHandler(value) {
      this.$dialog.toast({ mes: `搜索：${value}` });
    }
  },
  watch: {
    value2(val) {
      this.result = this.getResult(val);
    }
  },
  created() {}
};
</script>

<style scoped>
.found_page {
  margin-top: 45px;
  background-color: #ffffff;
}

span {
  color: #d8d8d8;
  font-size: 12px;
}
.stars_icon {
  display: flex;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
img {
  width: 15px;
  height: 15px;
  display: inline-block;
}
h3 {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 12px;
  font-weight: bold;
}
.all_choose {
  margin-top: 10px;
}
.choose_ul {
  display: flex;
}
.choose_ul li {
  flex: 1;
  text-align: center;
}
.icon_sp {
  text-align: center;
  margin-bottom: 10px;
}
.icon_sp span {
  color: #3f3f3f;
}
.iconfont {
  font-size: 28px;
}
</style>