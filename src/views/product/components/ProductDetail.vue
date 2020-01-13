<template>
  <div class="detail">
    <div class="img">
      <img :src="detailData.attachment" alt="" />
    </div>
    <ul class="detail-info" v-if="languageType == 1">
      <li>
        <span class="tag">名称:</span>
        <div class="content">{{ detailData.name }}</div>
      </li>
      <li>
        <span class="tag">材质:</span>
        <div class="content">{{ detailData.material }}</div>
      </li>
      <li>
        <span class="tag">特点:</span>
        <div class="content">{{ detailData.specialty }}</div>
      </li>
      <li>
        <span class="tag">应用:</span>
        <div class="content">{{ detailData.adhibition }}</div>
      </li>
    </ul>
    <ul class="detail-info" v-else>
      <li>
        <span class="tag">Name:</span>
        <div class="content">{{ detailData.name }}</div>
      </li>
      <li>
        <span class="tag">Material:</span>
        <div class="content">{{ detailData.material }}</div>
      </li>
      <li>
        <span class="tag">Characteristic:</span>
        <div class="content">{{ detailData.specialty }}</div>
      </li>
      <li>
        <span class="tag">Application:</span>
        <div class="content">{{ detailData.adhibition }}</div>
      </li>
    </ul>
    <div class="btn-box">
      <span class="btn" @click="goList">
        {{ goBackName }}
      </span>
    </div>
  </div>
</template>
<script>
import mixins from "../../../mixins/index.js";
export default {
  mixins: [mixins],
  props: {
    detailData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    goBackName() {
      return this.languageType == 1 ? "返回列表" : "Return List";
    }
  },
  created() {},
  methods: {
    // 返回列表
    goList() {
      this.$emit("goList");
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  .img
    padding 36px
    border 1px solid #231913
    width 700px
    img
      width 100%
  .detail-info
    padding 54px 18px 120px
    color color-main
    li
      display flex
      font-size 18px
      line-height 30px
      margin-bottom 26px
      .tag
        margin-right 10px
      .content
        flex 1
</style>
