<template>
  <ul id="list-box">
    <li
      v-for="item in productList"
      :key="item.productId"
      @click="goProduct(item)"
    >
      <div class="img-box">
        <img class="img" :src="item.attachment" alt="" />
        <div class="hover-text">
          <p>{{ item.productName }}</p>
          <p><iconfont type="iconjia" /></p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import mixins from "../../../mixins/index.js";
export default {
  mixins: [mixins],
  props: {
    productList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // 到产品详情
    goProduct(item) {
      console.log("item==", item);
      this.$router.push({
        path: "product_detail",
        query: {
          productId1: item.productMenuId,
          id: item.productId
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
ul
  display flex
  flex-flow wrap
  padding-right 60px
  width 1200px
  margin 0 auto
li
  border 1px solid #231913
  border-radius 1px
  padding 26px
  cursor pointer
  margin 0 0 60px 60px
  .img-box
    width 266px
    height 266px
    border-radius 2px
    position relative
    overflow hidden
    .img
      width 100%
      height 100%
    .hover-text
      position absolute
      left 0
      right 0
      top 86px
      color #fff
      font-size 22px
      opacity 0
      z-index 2
      p
        margin-bottom 0
        text-align center
        i
          font-size 40px
          font-weight 700
  &:hover
    .img-box
      .img
        transform scale(1.2)
        transition 0.5s
      &:after
        content ''
        width 100%
        height 100%
        background color-main
        opacity 0.6
        display block
        position absolute
        left 0
        top 0
      .hover-text
        opacity 1
        transition 0.5s
</style>
