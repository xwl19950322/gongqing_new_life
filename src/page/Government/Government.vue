<!-- 政务应用 -->
<template>
  <div class="convenient">
    <Thehead title="资讯">
        <span slot="left" class="header_search">
          <a href="javascript:" class="go_back" @click="$router.back()">
            <i class="icon iconfont" style="margin-right: 15px;">&#xe621;</i>
            <i class="icon iconfont">&#xe64f;</i>  
          </a>
        </span>
        <span slot="right" class="header_login">
            <i class="icon iconfont">&#xe613;</i>
        </span>
    </Thehead>
    <!-- 选项卡内容 -->
    <div class="tab_content">
        <div class="tab_gongqin">
          <div class="gongqin_left">
            <span>共青城市</span>
            <i class="icon iconfont" style="color:red;">&#xe600;</i>
          </div>
        </div>
        <yd-tab height="30px" active-color="#27A3E5" font-size="14px">
            <yd-tab-panel label="政务资讯">
                <div class="information">
                    <h3>亲，您还有5条信息没有查看</h3>
                    <div class="information_div">
                        <p class="p1">
                            <span>搜房网</span>
                            <span>刚刚</span>
                        </p>
                        <p class="p2">
                            <i class="icon iconfont">&#xe613;</i>
                        </p>
                    </div>
                </div>
                <div class="content_div" v-for="(conts,index) in 8" :key="index">
                    <h3>惊险！隔壁一小区电动车充电时起火，你还在这样做吗？做到安全防范意识。</h3>
                    <div class="content_div02">
                        <ul class="content_ul">
                            <li>
                                <div class="content_img">
                                    <img src="http://www.yunyichong.com/uploadfile/2017/1120/20171120791182.jpg"/>
                                </div>
                            </li>
                            <li>
                                <div class="content_img">
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536214685334&di=d1313cf3fdd2f4d3a729567c5c0b0181&imgtype=0&src=http%3A%2F%2Fi0.sinaimg.cn%2Fdy%2Fc%2F2007-11-22%2Fdb7aca8e129b03c95ffdec264fde821e.jpg"/>
                                </div>
                            </li>
                            <li>
                                <div class="content_img">
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536214725860&di=42047ffdc55b13da5831ca0c58fe6e65&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160908%2F6a14294750684509afef43d645d32566.jpeg"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="information_div">
                        <p class="p1">
                            <span>搜房网</span>
                            <span>刚刚</span>
                        </p>
                        <p class="p2">
                            <i class="icon iconfont">&#xe613;</i>
                        </p>
                    </div>
                </div>
            </yd-tab-panel>
            <yd-tab-panel label="企业征询">
                <enterprise/>
            </yd-tab-panel>
        </yd-tab>
        <!-- 返回顶部 -->
        <yd-backtop>
            <div class="yd-backtop yd-backtop-inlay" style="right: 5%; bottom: 70px;width:2rem;height:2rem;"><!----></div>
        </yd-backtop>
    </div>
  </div>
</template>

<script>
import enterprise from "../../page/Government/enterprise"
import Thehead from "../../components/HeaderTop/Thehead";
export default {
  name: "",
  components: { Thehead,enterprise },
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
.convenient {
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
}
.go_back {
  display: flex;
}
.tab_content {
  margin-top: 45px;
}
.tab_gongqin {
  position: relative;
}
.gongqin_left {
  margin-left: 8px;
}
.gongqin_left span {
  font-size: 14px;
  font-weight: bold;
  font-family: "NSimSun";
  margin-right: 8px;
}

/* 内容 */
h3 {
  font-size: 14px;
  margin-top: 8px;
}
.information {
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 0.3px solid #c9c9c9;
}
.information_div {
  position: relative;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
}
.p1 > span {
  margin-right: 10px;
  color: #c9c9c9;
}
.p2 {
  position: absolute;
  right: 2px;
}

/* 新闻内容 */
.content_div {
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 0.3px solid #c9c9c9;
}
.content_div02 {
  margin-top: 8px;
}
.content_img {
  width: 96%;
  height: 100%;
  margin-left: 1%;
  margin-right: 1%;
  overflow: hidden;
}
.content_img > img {
  width: 100%;
  height: 100%;
}
.content_ul {
  display: flex;
}
.content_ul > li {
  width: 33.3%;
}
.yd-backtop-inlay:after{
    font-size: 1rem;
}
</style>