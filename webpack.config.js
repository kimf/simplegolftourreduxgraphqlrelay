const path = require('path')
const webpack = require('webpack')

const devBuild = process.env.NODE_ENV !== 'production'

const OfflinePlugin = require('offline-plugin')

const bourbonPaths = require('bourbon').includePaths
const neatPaths = require('bourbon-neat').includePaths

const developmentPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new OfflinePlugin()
]

const productionPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ minimize: true }),
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
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'styles')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images
      }
    ]
  },
  sassLoader: {
    includePaths: [bourbonPaths, neatPaths]
  },
  eslint: {
    configFile: '.eslintrc',
    emitWarning: true
  }
}
