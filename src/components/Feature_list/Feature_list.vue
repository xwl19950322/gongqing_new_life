<!-- 功能列表 -->
<template>
  <div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_1.png"/>
          </div>
          <div>
              <span>个人信息</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_2.png"/>
          </div>
          <div>
              <span>生活充值记录</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_3.png"/>
          </div>
          <div>
              <span>我的快递</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_4.png"/>
          </div>
          <div>
              <span>信箱</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_5.png"/>
          </div>
          <div>
              <span>咨询对话</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_6.png"/>
          </div>
          <div>
              <span>我的求职</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_7.png"/>
          </div>
          <div>
              <span>电子卡包</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_8.png"/>
          </div>
          <div>
              <span>浏览痕迹</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_9.png"/>
          </div>
          <div>
              <span>我的EID</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_10.png"/>
          </div>
          <div>
              <span>报警进程</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_11.png"/>
          </div>
          <div>
              <span>关于我们</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_12.png"/>
          </div>
          <div>
              <span>APP设置</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
          </div>
      </div>
      <div class="feature">
          <div class="feature_img">
              <img src="static/images/layer_13.png"/>
          </div>
          <div>
              <span>机动车类</span>
          </div>
          <div class="feature_arrow">
              <i class="icon iconfont" style="color:#A8A8A8">&#xe6e9;</i>
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
.feature {
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 0.5px solid #E1E1E1;
}
.feature > div {
  display: inline-block;
}
.feature_img {
  width: 15px;
  height: 15px;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 25px;
}
.feature_img > img {
  width: 15px;
  height: 15px;
}
.feature_arrow{
    position: absolute;
    right: 15px;
}
.feature_arrow >img{
    width: 10px;
    height: 20px;
}
</style>