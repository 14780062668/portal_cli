<template>
  <div class="wrapper">
    <form name="theform">
      <input type="radio" name="myradio" value="local_name" checked="true" />
      上传文件名字保持本地文件名字
      <input type="radio" name="myradio" value="random_name" />
      上传文件名字是随机文件名
      <br />
      上传到指定目录:<input
        type="text"
        id="dirname"
        placeholder="如果不填，默认是上传到根目录"
        size="50"
      />
    </form>

    <h4>您所选择的文件列表：</h4>
    <div id="ossfile">你的浏览器不支持flash,Silverlight或者HTML5！</div>

    <br />

    <div id="container">
      <a id="selectfiles" href="javascript:void(0);" class="btn">选择文件</a>
      <a id="postfiles" href="javascript:void(0);" class="btn">开始上传</a>
    </div>

    <pre id="console"></pre>
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
  mounted() {
    // console.log('uploader.init()', uploader);
    // setTimeout(()=>{
    //   uploader.init();
    // }, 2000);
  },
  methods: {}
};
</script>
<style lang="stylus" scoped></style>
