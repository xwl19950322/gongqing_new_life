<!-- 服务应用 -->
<template>
  <div class="Service">
    <ul class="Service_ul">
        <li class="Service_li">
            <div class="parcel">
              <router-link to="/security">
                <div class="Service_div">
                    <img class="Service_img" src="static/images/service_1.png"/>
                </div>
                <span>公共服务</span>
              </router-link>
            </div>
        </li>
        <li class="Service_li">
            <div class="parcel">
                <div class="Service_div">
                    <img class="Service_img" src="static/images/service_2.png"/>
                </div>
                <span>掌上110</span>
            </div>
        </li>
        <li class="Service_li">
            <div class="parcel">
              <router-link to="/government">
                <div class="Service_div">
                    <img class="Service_img" src="static/images/service_3.png"/>
                </div>
                <span>政务应用</span>
              </router-link>
            </div>
        </li>
        <li class="Service_li">
            <div class="parcel">
              <router-link to="/convenient">
                <div class="Service_div">
                    <img class="Service_img" src="static/images/service_4.png"/>
                </div>
                <span>便民服务</span>
              </router-link>
            </div>
        </li>
        <li class="Service_li">
            <div class="parcel">
              <router-link to="/features">
                <div class="Service_div">
                    <img class="Service_img" src="static/images/service_5.png"/>
                </div>
                <span>特色版块</span>
              </router-link>
            </div>
        </li>
        <li class="Service_li">
            <div class="parcel" @click="$router.push('/found_page')">
                <div class="Service_div2">
                    <img class="Service_img2" src="static/images/service_6.png"/>
                </div>
                <span>全部</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {
    _initScroll() {
      //   new BScroll(".Service", {
      //     click: true
      //   });
    }
  },
  watch: {},
  created() {},
  mounted() {
    //初始化滚动条
    this._initScroll();
  }
};
</script>

<style>
.Service {
  width: 100%;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
}
.Service_ul {
  width: 100%;
  overflow: hidden;
}
.Service_li {
  float: left;
  width: 33.33%;
}
.Service_img {
  width: 30px;
  height: 32px;
  margin-top: 15px;
  margin-bottom: 8px;
}
.parcel {
  margin-bottom: 8px;
  height: 80px;
}
.Service_div2 {
  line-height: 58px;
}
span {
  font-size: 12px;
  font-family: "微软雅黑";
}
</style>