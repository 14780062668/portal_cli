<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-img.jpg" alt="" />
      <div class="text-box">
        <p>EQUIPMENTS</p>
        <p>生产设备</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag box-tag">
            <p class="eng">EQUIPMENTS</p>
            <p>生产设备</p>
          </div>
          <div class="introduce-detail">
            <div class="detail-info">
              <div class="text" v-html="pageItem.context"></div>
            </div>
          </div>
        </div>
        <ul class="img-box">
          <li><img src="./assets/img/1.jpg" alt="" /></li>
          <li><img src="./assets/img/2.jpg" alt="" /></li>
          <li><img src="./assets/img/3.jpg" alt="" /></li>
          <li><img src="./assets/img/4.jpg" alt="" /></li>
          <li><img src="./assets/img/5.jpg" alt="" /></li>
          <li><img src="./assets/img/6.jpg" alt="" /></li>
        </ul>
      </div>
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
    this.pageSort = 3;
    if (this.menuData.length == 0) {
      this.getMenuInfo();
    }
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.box
  border-top 2px solid #6e6e6e
  .content
    padding 40px 24px 20px
    .introduce
      display flex
    .introduce-detail
      padding 136px 0 0 120px
      flex 1
      .detail-info
        padding 20px 0 40px
        .text
          text-align justify
        p
          line-height 2
          font-size 16px
          margin-bottom 30px
  .img-box
    padding 100px 0 20px
    display flex
    flex-wrap wrap
    li
      padding 0 14px 14px 0
      height 274px
      &:first-child
        width 33.3%
      &:nth-child(2)
        width 33.3%
      &:nth-child(3)
        width 33.3%
      &:nth-child(4)
        width 45%
      &:nth-child(5)
        width 21.6%
      &:nth-child(6)
        width 33.3%
      img
        width 100%
        height 100%
</style>
