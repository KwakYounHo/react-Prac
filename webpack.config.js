const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./index.tsx"
  },
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.ts/, /\.tsx/],
        use: [
          "babel-loader",
          "ts-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8050,
    hot: true
  },
  resolve: {
    extensions: [
      ".js", ".jsx", ".ts", ".tsx"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}