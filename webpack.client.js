const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pathsToClean = ['dist'];

const config = {
  entry: './src/client/index.js',

  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
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
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor']
    // }),

    new ExtractTextPlugin('styles.css'),

    new CleanWebpackPlugin(pathsToClean, { verbose: true })
  ]
};

module.exports = config;
