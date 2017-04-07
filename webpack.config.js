const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  context: __dirname,
  entry: "./src/index.js",
  devtool: env.prod ? "cheap-module-source-map" : "eval",
  output: {
    path: "/dist",
    filename: "bundle.js",
    publicPath: "/dist"
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
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html.ejs"
    })
  ].concat(env.prod ? [new BundleAnalyzerPlugin()] : [])
});
