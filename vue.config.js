// 读取webpack的配置
let webpackConfig = require("./config/index.js");
console.log("webpackConfig=====", webpackConfig);
let merge = require("webpack-merge");
module.exports = merge(webpackConfig, {
  // 修改antd主题色
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#00aba5",
          "link-color": "#1DA57A",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  }
});
const path = require("path");
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/style/theme.styl")]
    });
}
