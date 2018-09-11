<!-- 底部选项卡 -->
<template>
  <div class="footer_guide">
      <div class="guide_item" :class="{on:'/home_page'===$route.path}" @click="goTo('/home_page')">
          <span class="item_icon">
              <i class="icon iconfont">&#xe6d3;</i>
          </span>
          <span>首页</span>
      </div>
      <div class="guide_item" :class="{on:'/found_page'===$route.path}" @click="goTo('/found_page')">
          <span class="item_icon">
              <i class="icon iconfont">&#xe623;</i>
          </span>
          <span>功能发现</span>
      </div>
      <div class="guide_item" :class="{on:'/my_page'===$route.path}" @click="goTo('/my_page')">
          <span class="item_icon">
              <i class="icon iconfont">&#xe61d;</i>
          </span>
          <span>个人空间</span>
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
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  },
  watch: {},
  created() {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins';

.footer_guide {
    top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 55px;
    display: flex;

    .guide_item {
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        color: #666666;

        &.on { // 被选中的颜色
            color: #0099E1;
        }
    }

    span {
        font-size: 12px;

        .iconfont {
            font-size: 22px;
        }
    }
}
</style>