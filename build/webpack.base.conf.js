var path = require('path')
var config = require('../config')
//var cssLoaders = require('./css-loaders')
var projectRoot = path.resolve(__dirname, '../')

var glob = require('glob');
var entries = getEntry('./source/**/*.entry.js'); // 获得入口js文件
entries['js/specs']= './source/js/specs.js';//jasmine测试页面入口

module.exports = {
  entry: entries,
  externals: {
    'jquery': 'jQuery'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'source': path.resolve(__dirname, '../source'),
      //'src': path.resolve(__dirname, '../src'),
      //'assets': path.resolve(__dirname, '../src/assets'),
      //'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },
      //{
      //  test: /\.vue$/,
      //  loader: 'vue'
      //},
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      //{
      //  test: /\.json$/,
      //  loader: 'json'
      //},
      //{
      //  test: /\.html$/,
      //  loader: 'vue-html'
      //},
      //{
      //  test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
      //  loader: 'url',
      //  query: {
      //    limit: 10000,
      //    name: path.join(config.build.assetsSubDirectory, '[name].[hash:7].[ext]')
      //  }
      //}
    ]
  },
  //vue: {
  //  loaders: cssLoaders()
  //},
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // }
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    extname = '.entry.js';
    basename = path.basename(entry, extname);
    tmp = entry.split('/').splice(2);
    pathname = tmp.join('/').replace(extname,''); // 正确输出js和html的路径
    entries[pathname] = entry;
  });
//  console.log(entries);
  return entries;
}
