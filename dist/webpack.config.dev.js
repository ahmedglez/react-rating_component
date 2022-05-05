"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Assets: path.resolve(__dirname, './src/assets'),
      Components: path.resolve(__dirname, './src/components'),
      Pages: path.resolve(__dirname, './src/pages'),
      Routes: path.resolve(__dirname, './src/routes'),
      Styles: path.resolve(__dirname, './src/styles')
    }
  },
  module: {
    rules: [{
      test: /\.js$|jsx/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.(css|scss)$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/i,
      type: 'asset'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html'
  }), new MiniCssExtractPlugin({
    filename: '[name].css'
  })],
  devServer: {
    "static": {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9015
  }
};