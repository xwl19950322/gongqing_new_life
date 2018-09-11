<!-- 园区地图 -->
<template>
  <div class="yuanditu">
    <div id="allmap" :style="mapStyle"></div>
    <div class="ditu">
        <span>由百度地图技术支持</span>
    </div>
  </div>
</template>

<script>
import BMap from "BMap";
export default {
  name: "",
  components: {},
  data() {
    return {
      mapStyle: {
        width: "100%",
        height: this.mapHeight + "px"
      }
    };
  },
  props: {
    mapHeight: {
      type: Number,
      default: 400
    },
    //经度
    longitude: {
      type: Number,
      default: 115.808154
    },
    // 维度
    latitude: {
      type: Number,
      default: 29.285191
    }
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(this.longitude, this.latitude);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point, 13);
      map.enableScrollWheelZoom(true);

      var content =
        '<div style="margin:0;line-height:16px;padding:2px;font-size:12px;">' +
        /*'<img :src="s1.jpg" style="float:right;zoom:1;overflow:hidden;width:100px;height:66px;margin-left:3px;"/>'+*/
        "地址：北京市丰台区丰台科技园汉威国际广场3区5号楼2M<br/>电话：022-3344563" +
        "</div>";
      // 信息窗的配置信息
      /*var opts ={
              width :200,
              height:50,
              title :"地址：",
            }
      /*var infoWindow =new BMap.InfoWindow(this.description, opts);// 创建信息窗口对象
            marker.addEventListener("click",function(){
              map.openInfoWindow(infoWindow,point);
            });
            map.enableScrollWheelZoom(true);
            map.openInfoWindow(infoWindow,point);//开启信息窗口*/
      var searchInfoWindow = null;
      searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title: "北京中厚明德", //标题
        width: 200, //宽度
        height: 70, //高度
        panel: "panel", //检索结果面板
        enableAutoPan: true, //自动平移
        searchTypes: [
          BMAPLIB_TAB_SEARCH, //周边检索
          BMAPLIB_TAB_TO_HERE, //到这里去
          BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
      });
      var marker = new BMap.Marker(point); // 创建标注
      marker.addEventListener("click", function(e) {
        searchInfoWindow.open(marker);
      });
      map.addOverlay(marker); // 将标注添加到地图中
    }
  },
  watch: {},
  created() {}
};
</script>

<style scoped>
.yuanditu {
  width: 100%;
  height: 100%;
}
#allmap {
  width: 100%;
  height: 100%;
}
.ditu{
    margin-top: 15px;
    text-align: center;
}
</style>