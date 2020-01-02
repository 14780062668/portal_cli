<template>
  <div class="wrapper">
    <banner />
    <div class="box">
      <div class="why-box">
        <h2>Why Choose us?</h2>
        <div class="why-btn">
          <span @click="gotoInfo">为什么选择我们</span>
          <iconfont @click="gotoInfo" type="icondianji-" />
        </div>
        <template v-if="languageType == 1">
          <div class="why-intro">
            <p>在真空领域内的机械加工厂非常多，为什么是您最合适的选择？</p>
            <p>因为我们更专业！我们的优势在于如下几点:</p>
          </div>
          <div class="why-Advantage">
            <div class="item circle">专业</div>
            <div class="item plus"><iconfont type="iconjia" /></div>
            <div class="item circle">质优</div>
            <div class="item plus"><iconfont type="iconjia" /></div>
            <div class="item circle">纳期</div>
          </div>
        </template>
        <div class="en-info" v-else>
          <div class="why-intro">
            <p>
              here are many machining manufacturers around the world that
              produce machined metal parts. But why should you work with us?
            </p>
            <p>
              Because we are a specialist for precision CNC machining with rare
              alloys. Our key advantages are:
            </p>
          </div>
          <div class="why-Advantage">
            <div class="item circle">Professional<br />Service</div>
            <div class="item plus"><iconfont type="iconjia" /></div>
            <div class="item circle">Reliable<br />Quality</div>
            <div class="item plus"><iconfont type="iconjia" /></div>
            <div class="item circle">On-time<br />Delivery</div>
          </div>
        </div>
        <product-list class="product" :productList="productList" />
      </div>
      <card-box class="card-box" />
    </div>
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import ProductList from "./components/ProductList.vue";
import CardBox from "./components/CardBox.vue";
import mixins from "../../mixins/index.js";
export default {
  mixins: [mixins],
  components: {
    Banner,
    ProductList,
    CardBox
  },
  data() {
    return {
      productList: []
    };
  },
  computed: {},
  created() {
    this.pageSort = 1;
    if (this.menuData.length == 0) {
      this.queryMenuInfo();
    }
  },
  methods: {
    // 获取菜单数据
    queryMenuInfo() {
      this.axios.get(`content/query_menu_info`).then(({ data }) => {
        console.log("res===", data);
        this.$store.commit("changeMenuData", data);
        //this.getProductId();
        // let timer = setTimeout(()=>{
        //   this.queryFile();
        //   clearTimeout(timer);
        // }, 100);
        this.$nextTick(() => {
          this.queryFile();
        });
      });
    },
    // 获取附件详情
    queryFile() {
      console.log("this.pageItem.id==", this.pageItem);
      this.axios
        .get(
          `content/query_attachment_with_product_by_menu_id?menuId=${this.pageItem.id}`
        )
        .then(({ data }) => {
          console.log("res===", data);
          this.productList = data;
        });
    },
    gotoInfo() {
      this.$router.push({
        name: "index_info"
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  padding-top 30px
  .why-box
    text-align center
    margin-bottom 40px
    h2
      color color-main
      font-size 80px
      margin-bottom 0
    .why-btn
      width 590px
      margin 0 auto 46px
      display flex
      span
        color #fff
        background color-main
        width 480px
        display inline-block
        height 64px
        line-height 64px
        text-align center
        font-size 41px
        border-radius 4px
        letter-spacing 16px
        margin 34px 30px 0 0
        cursor pointer
      .anticon
        color color-main
        font-size 90px
        cursor pointer
    .why-intro
      color color-main
      font-size 24px
      text-align center
      p
        margin-bottom 4px
    .why-Advantage
      width 950px
      margin 80px auto
      display flex
      .item
        width 190px
        height 190px
        line-height 50px
        padding-top 70px
        text-align center
        border-radius 50%
      .circle
        background color-main
        font-size 50px
        color #fff
      .plus
        color #687c6e
        font-size 50px
  .en-info
    .why-intro
      font-size 20px
    .why-Advantage
      .circle
        padding-top 56px
        line-height 40px
      .circle
        font-size 29px
.card-box
  padding 0 3% 50px
</style>
