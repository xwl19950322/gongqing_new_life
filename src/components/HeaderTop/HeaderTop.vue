<!-- 封装的公共头部 -->
<template>
  <div class="header">
      <slot name="left"></slot>
      <span class="header_title">
          <span class="header_title_text">{{title}}</span>
      </span>
      <slot name="right"></slot>
  </div>
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

<style scoped>
.header {
  background-color: #0099E1;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  /* border-bottom: 0.5px solid #E1E1E1; */
}
.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.header_title_text {
  font-size: 20px;
  color: #ffffff;
  display: block;
}
</style>