const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    style: "./index.js",
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
  }
}
