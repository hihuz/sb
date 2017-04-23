const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OfflinePlugin = require("offline-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => ({
  context: __dirname,
  entry: "./src/index.js",
  devtool: env.prod ? "cheap-module-source-map" : "eval",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    publicPath: ""
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        include: path.resolve(__dirname, "src"),
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      globals: {
        navigator: {},
        window: {}
      }
    }),
    new ExtractTextPlugin("main.css"),
    new CopyWebpackPlugin([{ from: "public" }]),
    new OfflinePlugin()
  ]
});
