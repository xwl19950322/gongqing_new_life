<!-- 企业展示 -->
<template>
  <div>
      <div class="content" v-for="(contents,index) in 6" :key="index">
          <div class="content_img">
              <img src="static/images/qiyezhanshi.png"/>
          </div>
          <div class="content_word">
              <h3>诺贝尔瓷砖</h3>
              <p>
                  <span>2011年获得高级烤瓷瓷砖家，现在...</span>
              </p>
              <p>
                  <i class="icon iconfont" style="color:red;">&#xe601;</i>
                  <span>共青城荷塘工业区辉坤路68号</span>
              </p>
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
.content{
    display: flex;
    border-bottom: 0.5px solid #E7E7E7;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #ffffff;
}
.content_img{
    width: 100px;
    height: 95px;
    overflow: hidden;
    margin-left: 10px;
    margin-right: 10px;
}
.content_img > img{
    width: 100%;
    height: 100%;
}
h3{
    font-size: 18px;
    margin-top: 10px;
}
.content_word{
    text-align: left;
}
.content_word >p{
    margin-top: 10px;
}
span{
    color: #767676;
}
</style>