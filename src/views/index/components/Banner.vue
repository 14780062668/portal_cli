<template>
  <div class="banner-box">
    <a-carousel autoplay>
      <div class="item">
        <img src="../assets/img/banner-0.jpg" alt="" />
        <div class="text-box">
          <div class="info">
            <p>Precision Machining Service</p>
            <p>Professional Manufacturer for CNC Machined Parts</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/img/banner-1.jpg" alt="" />
        <div class="text-box">
          <div class="info">
            <p>Precision Machined Components</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/img/banner-2.jpg" alt="" />
        <div class="text-box">
          <div class="info">
            <p>Specialist for Vacuum Machined Parts</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/img/banner-3.jpg" alt="" />
        <div class="text-box">
          <div class="info">
            <p>Precision Machined Components</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/img/banner-4.jpg" alt="" />
        <div class="text-box">
          <div class="info">
            <p>Specialist for Vacuum Machined Parts</p>
          </div>
        </div>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  mixins: [],
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
    font-size 26px
    color #fff
    position absolute
    left 0
    right 0
    top 170px
    text-align left
    .info
      width 628px
      margin 0 auto
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
