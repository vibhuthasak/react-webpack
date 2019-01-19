const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader"
        },
        { 
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true
          }
        }]
    }]
  },
  plugins: [htmlPlugin]
};