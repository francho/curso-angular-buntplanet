const path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin');

const versionTracking = new Date().toISOString();

module.exports = {
  entry: {
    app: [
      './src/main/app.js',
      './src/main/app.scss'
    ],
    vendors: [
      'angular',
      'angular-animate',
      'angular-aria',
      'angular-material',
      'angular-ui-router',
      'jjv'
    ]
  },
  devtool: 'source-map',
  output: {
    path: './build',
    filename: 'bundles/app.[hash].js'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.js$/, loader: "babel", exclude: /node_modules/, query: {presets: ['es2015']}}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/main/index.ejs')}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'bundles/vendors.[hash].js'),
    new CopyWebpackPlugin([
      {context: path.resolve(__dirname, 'src/main'), from: '**/*.html', to: '.'},
      {context: path.resolve(__dirname, 'src/main'), from: '**/*.svg', to: '.'},
      {context: path.resolve(__dirname, 'src/main'), from: '**/*.ico', to: '.'}
    ]),
    new ExtractTextPlugin("[name].[hash].css"),
    // ,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   minimize: true
    // })
    // new RollbarSourceMapPlugin({
    //   accessToken: '422c62b0091c4a81894a804fbaccba1b',
    //   version: versionTracking,
    //   publicPath: "http://localhost:8080"
    // }),
    new webpack.DefinePlugin({
      __VERSION_TRACKING__: JSON.stringify(versionTracking)
    }),
  ]
};