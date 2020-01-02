<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-img.jpg" alt="" />
      <div class="text-box">
        <p>PRODUCTS</p>
        <p>产品中心</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="tag box-tag">
          <p class="eng">PRODUCTS</p>
          <p>产品中心</p>
        </div>
        <div class="product-box">
          <!--资源详情-->
          <ul class="nav-list">
            <li
              v-for="item in productList"
              :key="item.id"
              @click="changeNav(item)"
              :class="[{ activeNav: activeSecondNav == item.id }]"
              :title="item.name"
            >
              {{ item.name }}
            </li>
          </ul>
          <div class="product-content">
            <product-detail :detailData="detailData" @goList="goList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "../../mixins/index.js";
import ProductDetail from "./components/ProductDetail.vue";
export default {
  mixins: [mixins],
  components: {
    ProductDetail
  },
  data() {
    return {
      activeSecondNav: 0,
      productList: [],
      detailData: {},
      productId1: "",
      productId2: ""
    };
  },
  computed: {},
  created() {
    // productId1 一级产品id
    // 产品id

    let { productId1, id } = this.$route.query;
    this.productId1 = productId1;
    this.productId2 = id;
    this.getList(this.productId1);
  },
  methods: {
    // 查询列表
    getList(id) {
      if (!id) return false;
      this.axios
        .get(`product/query_product_by_menu_id?menuId=${id}`)
        .then(({ data }) => {
          console.log("res===", data);
          this.productList = data;
          this.productDetail(this.productId2);
        });
    },
    // 产品详情
    productDetail(id) {
      if (!id) return false;
      console.log("id===", id);
      this.activeSecondNav = id;
      let detail = this.productList.find(val => val.id == id);
      console.log("detail==", detail);
      this.detailData = detail;
    },
    // 切换产品
    changeNav(item) {
      this.productDetail(item.id);
    },
    // 返回列表
    goList() {
      this.$router.push({
        path: "product"
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
$color-main = color-main
.box
  border-top 2px solid #6e6e6e
  .content
    padding 40px 24px 20px
    .product-box
      display flex
      margin-top 30px
      .nav-list
        width 380px
        li
          font-size 18px
          color #333
          margin-bottom 30px
          cursor pointer
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          &:before
            content ''
            width 14px
            height 14px
            display inline-block
            border-radius 1px
            margin-right 6px
        .activeNav
          &:before
            background $color-main
      .product-content
        flex 1
        padding 10px 0 80px
  .activeNav
    color $color-main
</style>
