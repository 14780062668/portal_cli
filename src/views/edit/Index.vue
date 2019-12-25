<template>
  <div class="wrapper">
    <div class="box">
      <ul>
        <li>
          <span class="tag">编辑菜单:</span>
          <div class="tag-content">
            <span
              v-for="item in editNavList"
              :class="['btn', { 'active-btn': item.sort == menuValue }]"
              :key="item.sort"
              @click="handleChangeMenu(item.sort)"
              >{{ item.cnName }}</span
            >
          </div>
        </li>
        <template v-if="[1, 3, 4, 6].includes(menuValue)">
          <li>
            <span class="tag">内容(中文):</span>
            <wangeditor ref="cnContent" />
          </li>
          <li>
            <span class="tag">内容(英文):</span>
            <wangeditor ref="enContent" />
          </li>
        </template>
        <template v-else-if="[2].includes(menuValue)">
          <li>
            <span class="tag">一级产品目录:</span>
            <div class="tag-content">
              <span
                v-for="item in pageItem.subMenus"
                :class="['btn', { 'active-btn': item.id == productId1 }]"
                :key="item.id"
                @click="handleChangeSubmenu(item, 1)"
                >{{ item.name }}</span
              >
            </div>
          </li>
          <li>
            <span class="tag">二级产品目录:</span>
            <div class="tag-content" v-show="productId1">
              <span
                v-for="item in secondProductList"
                :class="['btn', { 'active-btn': item.id == productId2 }]"
                :key="item.id"
                @click="handleChangeSubmenu(item, 2)"
                >{{ item.name }}
                <iconfont type="iconclose" @click.stop="deleteProduct(item)" />
              </span>
              <span
                :class="['btn', { 'active-btn': -1 == productId2 }]"
                @click="addProduct"
                ><iconfont type="iconjia" /> 添加</span
              >
            </div>
          </li>
          <li>
            <span class="tag">产品名称</span>
            <a-input
              v-model="productName"
              placeholder="请输入名称"
              size="large"
            />
          </li>
          <li>
            <span class="tag">材质:</span>
            <a-input v-model="material" placeholder="请输入材质" size="large" />
          </li>
          <li>
            <span class="tag">特点:</span>
            <a-input
              v-model="specialty"
              placeholder="请输入特点"
              size="large"
            />
          </li>
          <li>
            <span class="tag">应用:</span>
            <a-input
              v-model="adhibition"
              placeholder="请输入应用"
              size="large"
            />
          </li>
          <li>
            <span class="tag">首页是否展示:</span>
            <div class="tag-content">
              <span
                class="item-radio"
                v-for="item in showSort"
                :key="item.id"
                @click="productShowIndex(item)"
              >
                <a-radio size="large" :checked="item.checked">{{
                  item.name
                }}</a-radio>
              </span>
            </div>
          </li>
          <!-- <li>
            <span class="tag">英文名:</span>
            specialty: '',
            // 应用
            adhibition: '',
            <a-input v-model="enName" placeholder="请输入英文名" size="large" />
          </li> -->
          <li>
            <span class="tag">上传图片:</span>
            <upload
              class="upload"
              ref="productUpload"
              :maxFile="1"
              @changeFile="changeFile"
            />
          </li>
        </template>
      </ul>
    </div>
    <div class="btn-box">
      <span class="btn" @click="sureEdit">
        确定修改
      </span>
    </div>
  </div>
</template>
<script>
import mixins from "../../mixins/index.js";
import Upload from "../../components/ButtonUpload.vue";
import Wangeditor from "../../components/Wangeditor.vue";
import OssUpload from "../../components/OssUpload.vue";
export default {
  mixins: [mixins],
  components: {
    Upload,
    Wangeditor,
    OssUpload
  },
  data() {
    return {
      // 默认首页
      editorTimer: "",
      menuValue: -1,
      // 名称
      productName: "",
      // 材质
      material: "",
      // 特点
      specialty: "",
      // 应用
      adhibition: "",
      productId1: "",
      productId2: -1,
      secondProductList: [],
      // 内容
      cnContent: "",
      enContent: "",
      // 文件列表
      fileList: [],
      // 展示顺序
      showSort: [
        {
          id: -1,
          checked: true,
          name: "不展示"
        },
        {
          id: 1,
          checked: false,
          name: "1"
        },
        {
          id: 2,
          checked: false,
          name: "2"
        },
        {
          id: 3,
          checked: false,
          name: "3"
        },
        {
          id: 4,
          checked: false,
          name: "4"
        },
        {
          id: 5,
          checked: false,
          name: "5"
        },
        {
          id: 6,
          checked: false,
          name: "6"
        }
      ],
      showIndex: 0
    };
  },
  created() {
    this.pageSort = 1;
    if (this.menuData.length == 0) {
      this.getMenuInfo();
    }
  },
  methods: {
    // 查询菜单详情
    queryMenuContent() {
      // this.axios dddd
      //   .get(`content/query_attachment_by_menu_id?menuId=${this.menuValue}`)
      //   .then(data => {
      //     console.log("res===", data);
      //   });
      this.editorTimer = setTimeout(() => {
        if (this.$refs.cnContent && this.$refs.enContent) {
          console.log("设置富文本值==", this.pageItem.cnContext);
          this.cnContent = this.pageItem.cnContext;
          this.enContent = this.pageItem.enContext;
          this.$refs.cnContent.setContent(this.pageItem.cnContext);
          this.$refs.enContent.setContent(this.pageItem.enContext);
          clearTimeout(this.editorTimer);
        } else {
          clearTimeout(this.editorTimer);
          this.queryMenuContent();
        }
        this.$store.commit("changeLoading", false);
      }, 1000);
    },
    // 选择编辑菜单
    handleChangeMenu(val) {
      console.log("val==", val);
      if (this.menuValue === val) return false;
      this.menuValue = val;
      this.pageSort = val;
      if ([1, 3, 4, 6].includes(val)) {
        this.$store.commit("changeLoading", true);
        this.queryMenuContent();
      } else {
        clearTimeout(this.editorTimer);
        this.$store.commit("changeLoading", false);
      }
    },
    // 选择产品
    handleChangeSubmenu(item, type) {
      console.log(item);
      // type: 1:一级产品 2: 二级产品
      if (type == 1) {
        this.productId1 = item.id;
        this.getList();
      } else {
        this.productId2 = item.id;
        let detail = this.secondProductList.find(val => val.id === item.id);
        console.log("detail==", detail);
        this.productName = detail.name;
        this.material = detail.material;
        this.adhibition = detail.adhibition;
        this.specialty = detail.specialty;
        this.fileList = [
          {
            id: this.riseUuid(),
            name: detail.name,
            url: detail.attachment
          }
        ];
        this.productShowIndex({
          id: detail.sort
        });
        this.$refs.productUpload.changeFile(this.fileList);
      }
    },
    // 查询产品列表
    getList() {
      this.axios
        .get(`product/query_product_by_menu_id?menuId=${this.productId1}`)
        .then(({ data }) => {
          console.log("二级产品列表===", data);
          this.secondProductList = data;
          this.addProduct();
        });
    },
    // 添加产品
    addProduct() {
      this.productShowIndex({
        id: 0
      });
      this.productId2 = -1;
      this.productName = "";
      this.material = "";
      this.adhibition = "";
      this.specialty = "";
      this.fileList = [];
      this.$refs.productUpload.changeFile([]);
    },
    // 删除产品
    deleteProduct(item) {
      console.log("item==", item.id);
      this.$confirm({
        title: `是否删除${item.name}?`,
        okText: this.languageType == 1 ? "确定" : "yes",
        cancelText: this.languageType == 1 ? "取消" : "No",
        //content: "Some descriptions",
        onOk: () => {
          this.axios
            .delete("product/delete_product_by_id", {
              params: {
                id: item.id
              }
            })
            .then(data => {
              console.log("delete===", data);
              this.$message.success("删除成功");
              this.getList();
            });
        },
        onCancel: () => {
          this.$message.warning("取消删除产品");
        },
        class: "test"
      });
    },
    // 选择文件
    changeFile(file) {
      this.fileList = file;
    },
    // 首页展示
    productShowIndex(todo) {
      for (let item of this.showSort) {
        item.checked = item.id === todo.id ? true : false;
      }
      this.showIndex = todo.id;
    },
    // 确定编辑
    sureEdit() {
      if (this.menuValue == -1) return false;
      let index = this.initNavList.findIndex(
        val => val.sort === this.menuValue
      );
      console.log("index==", index, this.initNavList[index]);
      if (index == -1) {
        this.$message.warning("没有这个菜单");
        return false;
      }
      let listItem = this.initNavList[index];
      // 参数
      let params = {};
      switch (this.menuValue) {
        case 1:
        case 3:
        case 4:
        case 6:
          let cnContent = this.$refs.cnContent.getContent();
          let enContent = this.$refs.enContent.getContent();
          if (!cnContent) {
            this.$message.warning("文内容不能为空");
            return false;
          }
          if (!enContent) {
            this.$message.warning("英文内容不能为空");
            return false;
          }
          // 中文编辑
          this.axios
            .post(`content/update_menu_info`, {
              alias: this.cnName,
              context: cnContent,
              id: listItem.cnId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          // 英文文编辑
          this.axios
            .post(`content/update_menu_info`, {
              alias: this.enName,
              context: enContent,
              id: listItem.enId,
              name: listItem.enName
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          break;
        case 2:
          if (!this.productId1) {
            this.$message.warning("请选择一级产品");
            return false;
          }
          if (!this.productName) {
            this.$message.warning("请输入产品名称");
            return false;
          }
          if (!this.material) {
            this.$message.warning("请输入材质");
            return false;
          }
          if (!this.specialty) {
            this.$message.warning("请输入产品特点");
            return false;
          }
          if (this.fileList.length < 1) {
            this.$message.warning("请导入图片");
            return false;
          }
          params = {
            adhibition: this.adhibition,
            attachment: this.fileList[0].url,
            material: this.material,
            menuId: this.productId1,
            name: this.productName,
            specialty: this.specialty
          };
          if (this.showIndex > 0) {
            params.relationInfo = {
              menuId: this.initNavList[0].id,
              relationSort: this.showIndex
            };
          }
          console.log("params==", params);
          // 添加
          if (this.productId2 == -1) {
            this.axios.post(`product/add_product`, params).then(({ data }) => {
              console.log("res===", data);
              this.$message.success("添加成功");
              this.getList();
            });
          } else {
            // 编辑产品
            params.id = this.productId2;
            this.axios
              .post(`product/update_product`, params)
              .then(({ data }) => {
                this.$message.success("编辑产品成功");
                console.log("res===", data);
                this.getList();
              });
          }
          break;
        default:
          // 只修改别名  this.menuValue=5
          this.axios
            .post(`content/update_menu_info`, {
              alias: this.aliseCnName,
              context: "",
              id: listItem.cnId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          this.axios
            .post(`content/update_menu_info`, {
              alias: this.aliseEnName,
              context: "",
              id: listItem.enId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
      }

      console.log("编辑==", this.param);
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  margin-top 40px
  ul
    width 90%
    margin 80px auto 100px
  li
    display flex
    margin-bottom 40px
    .tag
      font-size 24px
      color #333
      padding-right 20px
      width 220px
      text-align right
    .tag-content
      flex 1
      display flex
      flex-wrap wrap
      .btn
        font-size 18px
        color #666
        padding 0 20px
        border 1px solid #d9d9d9
        line-height 40px
        margin 0 10px 10px 0
        border-radius 4px
        cursor pointer
        &:hover
          color #ffffff
          background #1493cf
          border-color #1493cf
        i
          margin-left 10px
      .active-btn
        color #ffffff
        background #1493cf
        border-color #1493cf
    .ant-input
      flex 1
    .ant-select
      flex 1
    .item-radio
      margin-right 10px
      .ant-radio-wrapper
        line-height 40px
    .editor-box
      flex 1
    .upload
      flex 1
.btn-box
  margin 20px auto 60px
</style>
