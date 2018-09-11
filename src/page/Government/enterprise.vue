<!-- 企业征信 -->
<template>
  <div class="enterprise">
    <div class="enterprise_div01">
        <ul class="enterprise_ul">
            <li>
                <span>企业信用信息</span>
            </li>
            <li>
                <span>经营异常目录</span>
            </li>
            <li>
                <span>严重违法失信企业名单</span>
            </li>
        </ul>
    </div>
    <!-- 搜索 -->
    <div class="enterprise_div02">
        <yd-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
    </div>
    <div class="enterprise_div03">
        <ul class="enterprise_ul02">
            <li>
                <div>
                    <div>
                        <i class="icon iconfont" style="color:#E1AC5C">&#xe6d2;</i>
                    </div>
                    <div>
                        <span>信息公告</span>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <i class="icon iconfont" style="color:#817A61">&#xe614;</i>
                    </div>
                    <div>
                        <span>企业信息填报</span>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <i class="icon iconfont" style="color:#FFCA05">&#xe68f;</i>
                    </div>
                    <div>
                        <span>小微企业名录</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
.enterprise_div01 {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.enterprise_ul {
  display: flex;
}
.enterprise_ul > li {
  flex: 1;
  text-align: center;
  overflow: hidden; /*内容超出后隐藏*/
  text-overflow: ellipsis; /* 超出内容显示为省略号*/
  white-space: nowrap; /*文本不进行换行*/
}
.enterprise_ul li span {
  font-size: 10px;
}
.enterprise_ul02 {
  display: flex;
}
.enterprise_ul02 > li {
  flex: 1;
  text-align: center;
  overflow: hidden; /*内容超出后隐藏*/
  text-overflow: ellipsis; /* 超出内容显示为省略号*/
  white-space: nowrap; /*文本不进行换行*/
}
.iconfont {
  font-size: 24px;
}
.enterprise_div03{
    margin-top: 20px;
}
</style>