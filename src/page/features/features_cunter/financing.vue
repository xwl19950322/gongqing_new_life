<!-- 企业融资 -->
<template>
  <div class="financing">
      <div class="financing_con" v-for="(financings,index) in 5" :key="index">
          <div class="financing_div01">
              <i class="icon iconfont">&#xe60d;</i>
              <span class="sp1">纳斯达克指数</span>
              <span class="sp2">按日付收益</span>
          </div>
          <!-- 下面内容 -->
          <div class="financing_div02">
              <p class="p1">
                 <span>投资资金：</span>
                 <span class="p1_sp">1000</span>
                 <span>元</span>
                 <span style=" margin-left:8px;">项目规模：</span> 
                 <span class="p1_sp">5000</span>
                 <span>万元</span>
              </p>
              <p class="p2">
                 <span>日化收益率</span>
                 <span>期限</span>
                 <span style="display: flex;">
                    <yd-progressbar style="width:80%;" type="line" :progress="progress4" trail-width="4" trail-color="#FE5D51"></yd-progressbar>
                    <span style="margin-left:5px;">{{progress4*100+"%"}}</span>
                 </span>
              </p>
              <p class="p3">
                  <i>
                    <span style="font-size:18px;color:red;">5.8</span><span style="color:red;">%</span>
                  </i>
                  <i>
                    <span style="color:red;">1</span><span>个自然日</span>
                  </i>
                  <i>
                    <button>立即投资</button>
                  </i>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      progress4: 0.8
    };
  },
  props: {},
  computed: {},
  methods: {},
  watch: {},
  created() {}
};
</script>

<style scoped>
.financing {
  width: 100%;
}
.financing_con {
  padding-left: 8px;
  padding-right: 8px;
  background-color: #fff;
}
.iconfont {
  font-size: 24px;
  color: #409acf;
}
.sp1 {
  font-size: 14px;
  font-weight: bold;
  margin-right: 15px;
}
.sp2 {
  font-size: 10px;
  background-color: #e6e6e6;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
}
.financing_div01 {
  display: flex;
  align-items: center;
  border-bottom: 0.5px dashed #e6e6e6;
}
/* 内容 */
.financing_div02{
    padding-bottom: 10px;
    border-bottom: 0.5px solid #D3D3D3;
}
.p1 {
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
}
.p1 span {
  color: #e6e6e6;
  font-size: 10px;
}
.p1 .p1_sp {
  font-size: 14px;
  color: #409acf;
}
.p2 {
  display: flex;
  margin-bottom: 10px;
}
.p2 > span {
  flex: 1;
}
button{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    background-color: #409acf;
    color: #ffffff;
}
.p3{
    display: flex;
}
.p3 i{
    flex: 1;
}
</style>