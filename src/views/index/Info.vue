<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/info-top.jpg" alt="" />
    </div>
    <div class="box">
      <div class="left-icon">
        <img src="./assets/img/info-1.jpg" alt="" />
        <img src="../qualityControl/assets/img/6.jpg" alt="" />
        <img src="./assets/img/info-3.jpg" alt="" />
      </div>
      <div class="right-info" v-html="pageItem.context"></div>
    </div>
  </div>
</template>
<script>
import mixins from "../../mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {};
  },
  computed: {},
  created() {
    this.pageSort = 1;
    if (this.menuData.length == 0) {
      this.getMenuInfo();
    }
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.box
  padding 40px 120px 100px 150px
  display flex
  .left-icon
    width 150px
    padding-top 6px
    img
      width 150px
      height 150px
      border-radius 50%
      &:nth-child(n+2)
        margin-top 146px
  .right-info
    flex 1
    padding-left 70px
    .info-item
      margin-bottom 30px
      h4
        color color-main
        font-size 24px
        margin-bottom 4px
      p
        line-height 30px
</style>
