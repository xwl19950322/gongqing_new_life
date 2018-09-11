<!-- 首页组件 -->
<template>
  <div class="home_page">
   <HeaderTop title="首页"/>
   <div class="home_content">
    <!-- <div class="swiper-container">
      <div class="swiper-slide"> -->
        <div class="home_page_div">
          <img src="static/images/home_page01.png" style=" width: 100%;"/>
        </div>
        <!-- <div class="swiper-slide">
          <img src="static/images/home_page01.png"/>
        </div>
        <div class="swiper-slide">
          <img src="static/images/home_page01.png"/>
        </div> -->
      <!-- </div> -->
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
    <!-- </div> -->
    <!-- 服务应用 -->
    <Service/>
    <GongQing/>
   </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import GongQing from "../../components/GongQing_time/GongQing_time";
import Service from "../../components/Service/Service";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "",
  components: { Service, GongQing, HeaderTop },
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {
    //初始化滚动条
    // _initScroll() {
    //   new BScroll(".home_page", {
    //     click: true
    //   });
    // }
  },
  watch: {},
  mounted() {
    // var mySwiper = new Swiper(".swiper-container", {
    //   loop: true, //是否循环轮播
    //   autoplay: true, //可选选项，自动滑动
    //   autoplay: {
    //     delay: 3000 //5秒切换一次
    //   },
    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
    // this._initScroll();
  },
  created() {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins';

.home_page {
  width: 100%;
  flex: 1;
  margin-bottom: 55px;

  .home_content {
    margin-top: 45px;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>