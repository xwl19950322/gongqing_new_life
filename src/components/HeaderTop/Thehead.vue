<!-- 封装的功能公共头部 -->
<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
        <span class="header_title_texts ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    title: String
  },
  computed: {},
  methods: {},
  watch: {},
  created() {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header {
  background-color: #E6E6E6;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .icon-sousuo {
      font-size: 25px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;

    .header_title_texts {
      font-size: 20px;
      color: #000000;
      display: block;
    }
  }

  .header_login {
    font-size: 20px;
    color: #666666;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    .header_login_text {
      color: #fff;
    }
  }
}
</style>