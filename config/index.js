let { env } = process;
const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : "prod";

console.log("NODE_ENV==", NODE_ENV);
// let webpackConfig = require(`./webpack.${
//   NODE_ENV === "development" ? "dev" : "prod"
// }.js`);
// console.log("webpackConfig==2==", webpackConfig);
//let merge = require("webpack-merge");
//module.exports = merge(webpackConfig, {});
module.exports = {
  publicPath: "/"
};
