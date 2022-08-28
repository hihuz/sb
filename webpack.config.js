const path = require("path");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const OfflinePlugin = require("@lcdp/offline-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
  target: "node",
  context: __dirname,
  entry: {
    install: "./src/index.js",
    static: "./src/static.js"
  },
  devtool: env.prod ? "cheap-module-source-map" : "eval",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    publicPath: ""
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "src"),
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src/styles")]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      entry: "static",
      globals: {
        navigator: {},
        window: {}
      }
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: "public" }] }),
    new OfflinePlugin()
  ]
});
