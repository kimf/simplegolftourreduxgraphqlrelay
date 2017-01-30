const path = require('path')
const webpack = require('webpack')

const devBuild = process.env.NODE_ENV !== 'production'

const OfflinePlugin = require('offline-plugin')

const bourbonPaths = require('bourbon').includePaths
const neatPaths = require('bourbon-neat').includePaths

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractSass = new ExtractTextPlugin({
//   filename: '[name].[contenthash].css',
//   disable: process.env.NODE_ENV === 'development'
// })

const developmentPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new OfflinePlugin()
]

const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    comprsess: {
      warnings: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new OfflinePlugin()
]

module.exports = {
  devtool: devBuild ? 'cheap-module-eval-source-map' : 'source-map',
  entry: devBuild ? [
    'webpack-hot-middleware/client',
    './index'
  ] : ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: devBuild ? developmentPlugins : productionPlugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [bourbonPaths, neatPaths]
            }
          }
        ],
        include: path.join(__dirname, 'styles')
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192' // inline base64 URLs for <=8k images
      }
    ]
  }
}
