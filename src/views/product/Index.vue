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
          <!--资源列表-->
          <ul class="nav-list">
            <li
              v-for="item in pageItem.subMenus"
              :key="item.id"
              @click="changeNav(item)"
              :class="[{ activeNav: activeNav == item.id }]"
              :title="item.name"
            >
              {{ item.name }}
            </li>
          </ul>
          <div class="product-content">
            <product-list ref="product_list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from "./components/ProductList.vue";
import mixins from "../../mixins/index.js";
export default {
  mixins: [mixins],
  components: {
    ProductList
  },
  data() {
    return {
      productListDataDemo: [
        {
          id: 1,
          cnName: "不锈钢加工件",
          enName: "CNC Machined Steel Parts",
          children: [
            {
              id: 1,
              cnName: "电渣重熔316不锈钢加工件",
              enName: "Electroslag Remelting 316SS Parts",
              imgUrl: require("./assets/product-img/1.jpg")
            },
            {
              id: 2,
              cnName: "304和316不锈钢加工件",
              enName: "304SS and 316SS Machined Parts",
              imgUrl: require("./assets/product-img/2.jpg")
            },
            {
              id: 3,
              cnName: "真空法兰",
              enName: "KF Flanges and CF Flanges",
              imgUrl: require("./assets/product-img/3.jpg")
            },
            {
              id: 4,
              cnName: "机加工接头",
              enName: "Machined Terminals and Connectors",
              imgUrl: require("./assets/product-img/4.jpg")
            },
            {
              id: 5,
              cnName: "BNC和SHV接头外壳",
              enName: "BNC & SHV Adapter Sockets",
              imgUrl: require("./assets/product-img/5.jpg")
            },
            {
              id: 6,
              cnName: "其它钢铁加工件",
              enName: "Other Machined Steel Component",
              imgUrl: require("./assets/product-img/6.jpg")
            }
          ]
        },
        {
          id: 2,
          cnName: "可伐合金加工件",
          enName: "CNC Machined Kovar Parts",
          children: [
            {
              id: 7,
              cnName: "可伐连接器",
              enName: "Kovar Machined Adapters and Sockets",
              imgUrl: require("./assets/product-img/7.jpg")
            },
            {
              id: 8,
              cnName: "可伐插针",
              enName: "Machined Kovar Terminal Pins",
              imgUrl: require("./assets/product-img/8.jpg")
            },
            {
              id: 9,
              cnName: "可伐连接针",
              enName: "Machined Kovar Conatcts and Conductors",
              imgUrl: require("./assets/product-img/9.jpg")
            },
            {
              id: 10,
              cnName: "可伐端帽",
              enName: "Machined Kovar Sleeves and Caps",
              imgUrl: require("./assets/product-img/10.jpg")
            },
            {
              id: 11,
              cnName: "可伐法兰",
              enName: "Kovar Flanges and Rings",
              imgUrl: require("./assets/product-img/11.jpg")
            },
            {
              id: 12,
              cnName: "其它可伐加工件",
              enName: "Other Machined Kovar Components",
              imgUrl: require("./assets/product-img/12.jpg")
            }
          ]
        },
        {
          id: 3,
          cnName: "英科镍加工件",
          enName: "CNC Machined Inconel and Incoloy Parts",
          children: [
            {
              id: 13,
              cnName: "英科镍加工件",
              enName: "Inconel Machined Parts",
              imgUrl: require("./assets/product-img/25.jpg")
            },
            {
              id: 14,
              cnName: "因科镍加工件",
              enName: "IncoloyMachined Parts",
              imgUrl: require("./assets/product-img/25.jpg")
            }
          ]
        },
        {
          id: 4,
          cnName: "镍铝及镍铬加工件",
          enName: "CNC Machined Chromel and Alumel Parts",
          children: [
            {
              id: 15,
              cnName: "镍铬插针",
              enName: "Machined Chromel Terminal Pins",
              imgUrl: require("./assets/product-img/15.jpg")
            },
            {
              id: 16,
              cnName: "镍铬插针",
              enName: "Machined Alumel Terminal Pins",
              imgUrl: require("./assets/product-img/16.jpg")
            }
          ]
        },
        {
          id: 5,
          cnName: "铜加工件",
          enName: "CNC Machined Copper Parts",
          children: [
            {
              id: 17,
              cnName: "铍铜加工件",
              enName: "Beryllium Copper Machined Parts",
              imgUrl: require("./assets/product-img/17.jpg")
            },
            {
              id: 18,
              cnName: "其他铜端子",
              enName: "Machined Copper Ternimals and Connectors",
              imgUrl: require("./assets/product-img/18.jpg")
            }
          ]
        },
        {
          id: 6,
          cnName: "其他合金加工件",
          enName: "Other CNC Machined Parts",
          children: [
            {
              id: 19,
              cnName: "蒙乃尔合金加工件",
              enName: "Monel Machined Parts",
              imgUrl: require("./assets/product-img/19.jpg")
            },
            {
              id: 20,
              cnName: "哈氏合金加工件",
              enName: "Hastelloy Machined Parts",
              imgUrl: require("./assets/product-img/25.jpg")
            },
            {
              id: 21,
              cnName: "因瓦合金加工件",
              enName: "Invar Machined Parts",
              imgUrl: require("./assets/product-img/25.jpg")
            },
            {
              id: 22,
              cnName: "其它镍合金加工件",
              enName: "Nickel Alloy Machined Parts",
              imgUrl: require("./assets/product-img/22.jpg")
            },
            {
              id: 23,
              cnName: "铝合金加工件",
              enName: "Aluminum Alloy Machined Parts",
              imgUrl: require("./assets/product-img/23.jpg")
            },
            {
              id: 24,
              cnName: "钼合金加工件",
              enName: "Molybdenum Machined Parts",
              imgUrl: require("./assets/product-img/25.jpg")
            }
          ]
        },
        {
          id: 7,
          cnName: "陶瓷金属封接件",
          enName: "Ceramic to Metal Assemblies",
          children: [
            {
              id: 25,
              cnName: "各类封接件",
              enName: "Ceramic to Metal Brazed Parts",
              imgUrl: require("./assets/product-img/25.jpg")
            }
          ]
        }
      ],
      activeNav: "",
      activeSecondNav: 0
    };
  },
  computed: {
    // 产品列表
    productList() {
      let result = [];
      let { subMenus } = this.pageItem;
      if (subMenus && subMenus.length > 0) {
        let item = subMenus.find(val => val.id === this.activeNav);
        if (item) result = item.subMenus;
      }
      return result;
    }
  },
  created() {
    this.pageSort = 2;
    if (this.menuData.length == 0) {
      this.queryMenuInfo();
    } else {
      this.getProductId();
    }
  },
  methods: {
    // 切换nav
    changeNav(item) {
      this.activeNav = item.id;
      this.getProductId();
    },
    // 获取菜单数据
    queryMenuInfo() {
      this.axios.get(`content/query_menu_info`).then(({ data }) => {
        console.log("res===", data);
        this.$store.commit("changeMenuData", data);
        this.getProductId();
      });
    },
    // 获取一级产品列表
    getProductId() {
      let timer = setTimeout(() => {
        if (this.activeNav) {
          this.$refs.product_list.getList(this.activeNav);
        } else if (this.pageItem && this.pageItem.subMenus.length) {
          this.activeNav = this.pageItem.subMenus[0].id;
          this.$refs.product_list.getList(this.activeNav);
        } else {
          this.getProductId();
        }
        console.log(`获取一级产品列表id=${this.activeNav}`);
        clearTimeout(timer);
      }, 500);
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
