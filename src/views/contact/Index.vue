<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-img.jpg" alt="" />
      <div class="text-box">
        <p>CONTACT US</p>
        <p>联系我们</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag box-tag">
            <p class="eng">CONTACT US</p>
            <p>联系我们</p>
          </div>
          <div class="introduce-detail">
            <div class="detail-info">
              <div class="text" v-if="languageType == 1">
                <div class="info-name">
                  <h2 class="cn-name">余姚市思豪真空科技有限公司</h2>
                </div>
                <div class="info-message">
                  <div class="tag-line">
                    <span class="tag">地址:</span>
                    浙江省余姚市凤山街道九垒山村下陈渡86号
                  </div>
                  <div class="tag-line">
                    <span class="tag">电话:</span>
                    0574-62676122
                    <span class="tag" style="margin-left:14px;">传真:</span>
                    0574-62676122
                  </div>
                  <div class="tag-line">
                    <span class="tag">联系人:</span>周泉君
                  </div>
                  <div class="tag-line">
                    <span class="tag">手机:</span>13335844026
                  </div>
                  <div class="tag-line">
                    <span class="tag">邮件:</span>tony@fine-boon.com
                  </div>
                </div>
              </div>
              <div class="text" v-else>
                <div class="info-name">
                  <h2 class="en-name">YUYAO SEEHAO VACUUM TECHNOLOGY CO.LTD</h2>
                </div>
                <div class="info-message">
                  <div class="tag-line">
                    <span class="tag">Factory Address:</span>
                    No.86 XIANCHENDU, JIULEISHAN VILLAGE, FENGSHAN TOWN, YUYAO
                    CITY, ZHEJIANG PROVINCE, P.R.CHINA
                  </div>
                  <div class="tag-line">
                    <span class="tag">Tel:</span>
                    +86-574-62676122
                    <span class="tag" style="margin-left:14px;">Fax:</span>
                    +86-574-62676122
                  </div>
                  <div class="tag-line">
                    <span class="tag">Contact:</span>Tony Liu
                  </div>
                  <div class="tag-line">
                    <span class="tag">Mobile:</span>+86-15921695152
                  </div>
                  <div class="tag-line">
                    <span class="tag">Email:</span>tony@fine-boon.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <area-map class="area-map" />
      </div>
    </div>
  </div>
</template>
<script>
import AreaMap from "../../components/AreaMap.vue";
import mixins from "../../mixins/index.js";
export default {
  mixins: [mixins],
  components: {
    AreaMap
  },
  data() {
    return {};
  },
  created() {
    this.pageSort = 5;
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
        padding 20px 0 40px 0
        .info-name
          margin-bottom 60px
          h2
            color color-main
            margin-bottom 0
            font-weight 400
          .cn-name
            font-size 50px
            line-height 54px
          .en-name
            font-size 36px
            line-height 40px
        .info-message
          .tag-line
            font-size 28px
            color #333
            padding 8px 0
            .tag
              margin-right 12px
  .area-map
    padding 50px 0 160px
</style>
