<template>
  <div class="wrapper">
    <baidu-map class="map" @ready="handler" :center="center" :zoom="zoom">
      <bm-marker
        :position="markerPoint"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        :icon="iconIndo"
      >
        <bm-label
          :content="content"
          :labelStyle="{
            color: '#f00',
            fontSize: '14px',
            border: 'none',
            padding: '4px 6px'
          }"
          :offset="{ width: -80, height: 40 }"
        />
      </bm-marker>
    </baidu-map>
  </div>
</template>
<script>
import area from "../assets/img/area.png";
export default {
  data() {
    return {
      content: "余姚市思豪真空科技有限公司",
      center: { lng: 0, lat: 0 },
      zoom: 1,
      markerPoint: {
        lng: 0,
        lat: 0
      },
      showInfo: false,
      iconIndo: {
        url: area,
        size: {
          width: 30,
          height: 30
        }
      }
    };
  },
  created() {},
  methods: {
    // url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
    handler({ BMap, map }) {
      console.log(BMap, map);
      //121.200917,30.050531
      this.center.lng = 121.200917;
      this.center.lat = 30.050531;
      this.markerPoint = this.center;
      this.zoom = 18;
    }
  }
};
</script>
<style lang="stylus" scoped>
.map
  width 94%
  margin 30px auto
  height 600px
</style>
