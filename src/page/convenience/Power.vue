<!-- 停电查询 -->
<template>
  <div>
    <div class="yd_tab01">
      <ul>
        <li>
          <div class="yd_tab01_zi01">
            <span>停电信息</span>
          </div>
        </li>
        <li>
          <div class="yd_tab01_zi">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本市于，8月15号上午9点停电至下午2点。由于奥特曼打怪兽的时候，不小心踩到我们的变压器导致停电。
            </span>
            <div class="power_div">
              <p>九江市共青城市宣</p>
              <p>2018.9.04日&nbsp;&nbsp;07：00</p>
            </div>
          </div>
        </li>
      </ul>
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
.yd_tab01 {
  margin-left: 5px;
  margin-right: 5px;
  background-color: #fff;
}
.yd_tab01_zi01 span {
  font-size: 14px;
}
.yd_tab01_zi01 {
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #efefef;
}
.yd_tab01_zi {
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.yd_tab01_zi span{
  line-height: 20px;
}
.power_div{
  text-align: right;
}
</style>