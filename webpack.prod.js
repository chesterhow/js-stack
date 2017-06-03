const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pathsToClean = ['dist'];

const config = {
  entry: [
    './src/index.js'
    // entry point of the app
  ],

  output: {
    filename: 'bundle.js',

    path: path.resolve(__dirname, 'dist'),

    publicPath: ''
    // necessary for HMR to know where to load the hot update chunks
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
          // creates style nodes from JS strings
        }, {
          loader: 'css-loader'
          // translates CSS into CommonJS
        }, {
          loader: 'sass-loader'
          // compiles Sass to CSS
        }]
      }, {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
            name: '[name].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false
    }),

    new HtmlWebpackPlugin({ template: 'index.html' }),

    new CleanWebpackPlugin(pathsToClean, { verbose: true })
  ]
};

module.exports = config;
