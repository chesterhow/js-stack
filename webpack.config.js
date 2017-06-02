const path = require('path');
const webpack = require('webpack');

const config = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for react

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js'
    // entry point of the app
  ],

  output: {
    filename: 'bundle.js',

    path: path.resolve(__dirname, 'dist'),

    publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ],

  devServer: {
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true
    // enable HMR on the server
  }
};

module.exports = config;
