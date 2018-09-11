<!-- 共青实时组件 -->
<template>
  <div class="gongqing">
      <div class="gongqing_time">
          <div class="gongqing_left">
            <div class="div_flex">
              <div class="inside_left">
                  <span>N</span>
              </div>
              <div class="inside_right">
                  <p>共青实时</p>
                  <p>ews</p>
              </div>
            </div>
          </div>
          <div class="gongqing_right">
              <span>2018年8月20日</span>
              <span>10:32:47</span>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" style="position: absolute;right:10px;bottom: 0px; width:50%;"></div>
          </div>
      </div>
      <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="static/images/home_page02.png"/>
        </div>
        <div class="swiper-slide">
          <img src="static/images/home_page02.png"/>
        </div>
        <div class="swiper-slide">
          <img src="static/images/home_page02.png"/>
        </div>
      </div>
    </div>
    <!-- 新闻列表 -->
    <div class="news" v-for="news in 5" :key="news">
      <div class="news_top">
        <div class="news_cuon">
          <div class="news_square"></div>
          <div class="news_local">
            <span>本地新闻</span>
          </div>
        </div>
        <div class="news_strip"></div>
      </div>
      <div class="news_the">
        <img src="static/images/home_page03.png"/>
      </div>
      <div class="news_button">
        <h3>共青科教城全力打造现代化高等教育新高地略记</h3>
        <div class="nairon">
          <p>-&nbsp;&nbsp;省农业厅一行来共青城市调研</p>
          <p>-&nbsp;&nbsp;市领导到乡镇现场调度脱贫攻坚工作&nbsp;&nbsp;杨祖荣带队</p>
          <p>-&nbsp;&nbsp;市领导调研 “两新” 组织党建工作&nbsp;&nbsp;汪玉贵带队</p>
          <p>-&nbsp;&nbsp;共青城市市场主体过万户</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
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
  created() {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, //是否循环轮播
      autoplay: true, //可选选项，自动滑动
      autoplay: {
        delay: 3000 //5秒切换一次
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      }
    });
  }
};
</script>

<style scoped>
.gongqing_time {
  display: flex;
  height: 46px;
}
.gongqing_left {
  width: 40%;
  background-color: #c10708;
  color: #ffffff;
}
.div_flex {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.gongqing_right {
  width: 60%;
  background-image: url("../../../static/images/gongqing_1.png");
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  text-align: center;
  position: relative;
}
.gongqing_right > span {
  color: #008a3a;
  line-height: 40px;
  font-weight: bold;
  font-size: 14px;
}
.inside_left {
  height: 40px;
  margin-top: 3px;
  line-height: 40px;
}
.inside_left > span {
  font-size: 8vw;
  font-weight: bold;
}
.inside_right {
  height: 40px;
  margin-top: 3px;
}
.inside_right > p {
  font-size: 10px;
  font-weight: bold;
}
.inside_right > p:nth-child(1) {
  padding-top: 5px;
}
/* 下面新闻列表 */
.news {
  width: 100%;
}
.news_top {
  display: flex;
  margin: 15px 2px 15px 2px;
}
.news_square {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #c90209;
}
.news_local span {
  color: #c90209;
  font-size: 16px;
  font-weight: bold;
}
.news_cuon {
  width: 30%;
  display: flex;
}
.news_strip {
  width: 70%;
  height: 20px;
  border-left: 10px solid #c90209;
  border-bottom: 3px solid #c90209;
}
h3 {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.nairon {
  margin-top: 15px;
}
.nairon > p {
  color: #b5aea9;
  font-size: 12px;
  font-weight: bold;
  line-height: 22px;
}
.news_the {
  width: 100%;
  overflow: hidden;
}
.news_the > img {
  width: 100%;
}
.news_button {
  margin-top: 15px;
}
/* 分页器y样式 */
</style>