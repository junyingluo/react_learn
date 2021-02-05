const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname) + "../../dist/",
    filename: "[name].[hash:8].js",
    chunkFilename: "[name].[hash:8].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "@src": path.resolve("./src"),
    },
    extensions: [".js", ".jsx"]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: '8080',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: "all",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Broccoli",
      template: "./src/main.template",
      minify: false
    })
  ]
};
