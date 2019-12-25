<template>
  <ul id="list-box">
    <li v-for="item in productList" :key="item.id" @click="goDetail(item)">
      <div class="img-box">
        <!-- <img :src="item.attachment" alt="" /> -->
        <div
          class="img"
          :style="{ 'background-image': `url(${item.attachment})` }"
        ></div>
        <div class="hover-text">
          <p>{{ item.name }}</p>
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
  components: {},
  data() {
    return {
      productList: [],
      // 一级产品id
      productId1: ""
    };
  },
  computed: {},
  methods: {
    // 查询列表
    getList(id) {
      if (!id) return false;
      this.productId1 = id;
      this.axios
        .get(`product/query_product_by_menu_id?menuId=${id}`)
        .then(({ data }) => {
          console.log("res===", data);
          // for(let item of data){
          //   let $img = document.createElement('img');
          //    $img.src = item.attachment;
          //    console.log('img==', $img,$img.width);
          // }
          this.productList = data;
        });
    },
    // 查看详情
    goDetail(item) {
      this.$router.push({
        path: "product_detail",
        query: {
          productId1: this.productId1,
          id: item.id
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
li
  border 1px solid #231913
  border-radius 2px
  padding 36px
  cursor pointer
  margin 0 0 60px 60px
  .img-box
    width 260px
    height 260px
    border-radius 2px
    position relative
    overflow hidden
    .img
      width 100%
      height 100%
      background-repeat no-repeat
      background-position center center
      background-size cover
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
        padding 0 30px
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
        background #1493cf
        opacity 0.6
        display block
        position absolute
        left 0
        top 0
      .hover-text
        opacity 1
        transition 0.5s
</style>
