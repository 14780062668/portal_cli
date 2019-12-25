<template>
  <div class="card-box">
    <div class="title-box">
      <div class="tag box-tag">
        <p class="eng">QUALITY</p>
        <p class="eng">CONTROL</p>
        <p>质量控制</p>
      </div>
    </div>
    <ul class="card-list">
      <li>
        <img src="../assets/img/card-1.jpg" alt="" />
      </li>
      <li>
        <img src="../assets/img/card-2.jpg" alt="" />
      </li>
      <li>
        <img src="../assets/img/card-3.jpg" alt="" />
      </li>
      <li>
        <img src="../assets/img/card-4.jpg" alt="" />
      </li>
    </ul>
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
.card-box
  .title-box
    position relative
    &:after
      content ''
      position absolute
      left 190px
      top 92px
      right 0
      height 1px
      background #3f3f3f
      opacity 0.4
  .card-list
    margin-top 60px
    display flex
    flex-flow wrap
    li
      flex 1
      max-width 274px
      height 368px
      &:nth-child(n+2)
        margin-left 40px
        border 1px solid #9f9f9f
      img
        width 100%
        height 100%
</style>
