<template>
  <div class="header-box">
    <header>
      <img
        class="logo"
        @click="goHomePage"
        src="../assets/img/logo.png"
        alt=""
      />
      <nav class="nav-main">
        <router-link
          tag="span"
          v-for="item in navList"
          :key="item.id"
          :class="[{ activeNav: active == item.sort }]"
          :to="{
            path: item.pathName
          }"
          >{{ item.name }}</router-link
        >
      </nav>
      <div class="change-language">
        <span
          :class="[{ 'active-language': languageVal == 1 }]"
          @click="changeLanguage(1)"
          >CN</span
        >
        <span
          :class="[{ 'active-language': languageVal == 2 }]"
          @click="changeLanguage(2)"
          >EN</span
        >
      </div>
    </header>
  </div>
</template>
<script>
import mixins from "../mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {
      languageVal: 1
    };
  },
  computed: {
    // 导航sort
    active() {
      let result = 0;
      let { name } = this.$route;
      switch (name) {
        case "about_me":
          result = 6;
          break;
        case "product":
        case "product_detail":
          result = 2;
          break;
        case "equipment":
          result = 3;
          break;
        case "quality_control":
          result = 4;
          break;
        case "contact_us":
          result = 5;
          break;
        case "edit":
          result = 1000;
          break;
        default:
          result = 1;
      }
      return result;
    }
  },
  created() {
    let languageVal = sessionStorage.getItem("languageVal");
    languageVal = languageVal || 1;
    this.changeLanguage(languageVal, 1);
  },
  methods: {
    // 去首页
    goHomePage() {
      this.$router.push({
        name: "Index"
      });
    },
    // 切换语言
    // first:1 设置的
    changeLanguage(type, first) {
      if (this.languageVal == type) return false;
      this.languageVal = type;
      this.$store.commit("changeLanguage", type);
      sessionStorage.setItem("languageVal", type);
      if (first == 1) {
        return false;
      }
      let { name } = this.$route;
      if (name == "edit") {
        this.$router.go(0);
      } else {
        this.$router.push({
          name: "Index"
        });
        this.$router.go(0);
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>
