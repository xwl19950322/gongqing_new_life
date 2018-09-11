<!-- 个人空间组件 -->
<template>
  <div class="my_page">
    <HeaderTop title="个人空间"/>
    <div style="margin-top: 45px;overflow: hidden;">
    <div class="my_head">
      <div class="my_img">
        <img src="static/images/head.png"/>
      </div>
      <div class="my_login">
        <span>你还没有登录</span>
        <button>点击登录</button>
      </div>
    </div>
    <!-- 功能选项 -->
    <Options/>
    <Feature/>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Options from "../../components/options/options";
import Feature from "../../components/Feature_list/Feature_list";
export default {
  name: "",
  components: { Options, Feature, HeaderTop },
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

<style lang="stylus" rel="stylesheet/stylus">
.my_page {
  margin-bottom: 55px;
  background-color: #fff;

  .my_head {
    width: 100%;
    height: 80px;
    display: flex;
    // justify-content: center;
    align-items: center;
    background-color: #0099E1;

    .my_login {
      margin-left: 15px;

      span {
        color: #fff;
        font-size: 12px;
      }

      button {
        border: none;
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .my_img {
      width: 48px;
      height: 48px;
      margin-left :10%;
      overflow: hidden;

      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>