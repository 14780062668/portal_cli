<template>
  <div class="editor-box">
    <div :id="editorId"></div>
    <!-- <div class="editor-btn">
      <span class="btn" @click="setContent">设置内容</span>
      <span class="btn" @click="getContent">获取内容</span>
      <span class="btn" @click="clearContent">清除内容</span>
    </div> -->
  </div>
</template>
<script>
import wangeditor from "wangeditor";
import mixins from "../mixins/index.js";
export default {
  mixins: [mixins],
  props: {},
  data() {
    return {
      editorId: this.riseUuid(),
      // 编辑器
      editor: ""
    };
  },
  mounted() {
    console.log("wangeditor===", wangeditor);
    // 创建编辑器
    this.editor = new wangeditor(`#${this.editorId}`);
    this.editor.customConfig.onchange = function(html) {
      // html 即变化之后的内容
      console.log(html);
    };
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    this.editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器

    // 隐藏“网络图片”tab
    this.editor.customConfig.showLinkImg = false;
    // 自定义配置颜色（字体颜色、背景色）
    this.editor.customConfig.colors = [
      "#1493cf",
      "#000000",
      "#eeece0",
      "#1c487f",
      "#4d80bf",
      "#c24f4a",
      "#8baa4a",
      "#7b5ba1",
      "#46acc8",
      "#f9963b",
      "#ffffff"
    ];

    // 限制一次最多上传 5 张图片
    // editor.customConfig.uploadImgMaxLength = 5

    // 禁用编辑内容
    // editor.$textElem.attr('contenteditable', true);
    //编辑默认的菜单配置如下
    this.editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      // "link", // 插入链接
      //"list", // 列表
      "justify", // 对齐方式
      // "quote", // 引用
      // "emoticon", // 表情
      //"image", // 插入图片
      // "table", // 表格
      //"video", // 插入视频
      // "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create();
  },
  methods: {
    // 设置内容
    setContent(html = "demo") {
      let content = this.editor.txt.html(html);
      console.log(`content===${content}`);
    },
    // 获取内容
    getContent() {
      let content = this.editor.txt.html();
      console.log(`content===${content}`);
      return content;
    },
    // 追加内容
    appendContent() {
      let content = this.editor.txt.append("<p>追加的内容</p>");
      console.log(`content===${content}`);
    },
    // 清除内容
    clearContent() {
      this.editor.txt.clear();
    }
  }
};
</script>
<style lang="stylus" scoped>
.editor-btn
  text-align center
  padding 20px 0
  .btn
    display inline-block
    background #1493cf
    color #ffffff
    font-size 16px
    padding 4px 20px
    text-align center
    border-radius 4px
    cursor pointer
    &:hover
      opacity 0.8
</style>
