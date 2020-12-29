const path = require("path");
const { paths } = require("react-app-rewired");

// https://github.com/arackaf/customize-cra/blob/master/api.md
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
  addWebpackModuleRule,
} = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, `${paths.appSrc}/`),
    // "@components": path.resolve(__dirname, "./src/components/index/public")
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
    // importLoaders: 2,
    // modules: {
    //   localIdentName: "[name]__[local]___[hash:base64:5]"
    // }
  }),

  addWebpackModuleRule({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: "graphql-tag/loader",
  })
);
