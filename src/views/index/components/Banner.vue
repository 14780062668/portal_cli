<template>
  <div class="banner-box">
    <a-carousel autoplay>
      <div class="item">
        <img src="../assets/img/banner-0.jpg" alt="" />
        <div class="text-box">
          <div class="info" v-if="languageType == 2">
            <p class="text large">PRECISION MACHINING SERVICE</p>
            <p class="eng">
              PROFESSIONAL MANUFACTURER<br />FOR CNC MACHINED PARTS
            </p>
          </div>
          <div class="info" v-else>
            <p class="text cn">真空领域、稀有合金精密定制件</p>
            <p class="text cn">专业的机械加工公司</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/img/banner-1.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/banner-2.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/banner-3.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/banner-4.jpg" alt="" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
import mixins from "../../../mixins/index.js";
export default {
  mixins: [mixins],
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
.banner-box
  margin-bottom 30px
  position relative
  overflow hidden
  width 100%
  .text-box
    color #fff
    position absolute
    left 0
    right 0
    top 84px
    text-align left
    .info
      margin-left 24.2%
      .text
        color color-main
      .large
        font-size 42px
      .eng
        line-height 40px
        font-size 34px
      .cn
        font-size 43px
    p
      margin-bottom 0

.ant-carousel >>> .slick-slide {
  text-align: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.ant-carousel >>> .slick-slide img {
  width: 100%;
}
</style>
