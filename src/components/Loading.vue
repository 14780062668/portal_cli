<template>
  <div class="load-box">
    <a-spin tip="Loading..."> </a-spin>
  </div>
</template>
<script>
export default {
  mixins: [],
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
.load-box
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  z-index 10000
  background rgba(255,255,255,0.2)
  .ant-spin-spinning
    position relative
    width 100%
    top 40%
.spin-content
  border 1px solid #91d5ff
  background-color #e6f7ff
  padding 30px
</style>
