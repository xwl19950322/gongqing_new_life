<!-- 招商咨询 -->
<template>
  <div>
      <div class="content" v-for="(content,index) in 6" :key="index">
          <div class="content_img">
              <img src="static/images/Intent.png"/>
          </div>
          <div class="content_word">
              <h3>52week便利店</h3>
              <p>
                  <span>外卖混合型便利店，轻松好经营</span>
              </p>
              <p>
                  <span>投资额度：</span>
                  <span style="color:red;">￥10-20万</span>
              </p>
              <p>
                  <span>所属行业：超市</span>
              </p>
          </div>
          <div class="content_button">
              <button>我要咨询</button>
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
.content {
  display: flex;
  border-bottom: 0.5px solid #e7e7e7;
  padding-bottom: 10px;
  background-color: #ffffff;
}
.content_img {
  width: 110px;
  height: 80px;
  overflow: hidden;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
.content_img > img {
  width: 100%;
  height: 100%;
}
.content_button > button {
  border: 1px solid #4679f7;
  color: #4679f7;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 5px;
  padding-top: 4px;
  margin-top: 8px;
}
.content_word p {
  margin-top: 5px;
}
.content_word p span {
  overflow: hidden; /*内容超出后隐藏*/
  text-overflow: ellipsis; /* 超出内容显示为省略号*/
  white-space: nowrap; /*文本不进行换行*/
}
h3 {
  font-size: 16px;
}
span {
  color: #808080;
}
</style>