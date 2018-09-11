<!-- 选项卡功能 -->
<template>
  <div>
      <div class="options">
          <ul class="options_ul">
              <li>
                  <div class="options_content">
                      <div class="options_img1">
                          <img src="static/images/options_1.png"/>
                      </div>
                      <div class="options_word">
                          <span>酒店订单</span>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="options_content">
                      <div class="options_img2">
                          <img src="static/images/options_2.png"/>
                      </div>
                      <div class="options_word">
                          <span>火车票订单</span>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="options_content">
                      <div class="options_img3">
                          <img src="static/images/options_3.png"/>
                      </div>
                      <div class="options_word">
                          <span>航班订单</span>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="options_content">
                      <div class="options_img4">
                          <img src="static/images/options_4.png"/>
                      </div>
                      <div class="options_word">
                          <span>更多订单</span>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <div class="shadow"></div>
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
.options {
  width: 100%;
  height: 90px;
  border-top: 0.5px solid #e1e1e1;
  /* border-bottom: 0.5px solid #e1e1e1; */
}
.shadow {
  width: 100%;
  height: 15px;
  background-color: #F7F7F7;
}
.options_ul {
  display: flex;
  height: 90px;
}
.options_ul > li {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1;
  justify-content: center;
}
.options_content {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.options_img1,
.options_img2,
.options_img3,
.options_img4 {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
.options_img1 > img {
  width: 35px;
  height: 35px;
}
.options_img2 > img {
  width: 35px;
  height: 26px;
}
.options_img3 > img {
  width: 35px;
  height: 34px;
}
.options_img4 > img {
  width: 35px;
  height: 7px;
}
.options_word {
  margin-top: 8px;
}
.options_word > span {
  font-size: 12px;
}
</style>