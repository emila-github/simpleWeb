var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
//var cssLoaders = require('./css-loaders')
//var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var glob = require('glob');

module.exports = merge(baseWebpackConfig, {
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: path.join(config.build.assetsSubDirectory, '[name].[chunkhash].js'),
    chunkFilename: path.join(config.build.assetsSubDirectory, '[id].[chunkhash].js')
  },
  //vue: {
  //  loaders: cssLoaders({
  //    sourceMap: config.build.productionSourceMap,
  //    extract: true
  //  })
  //},
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        ascii_only: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    //new ExtractTextPlugin(path.join(config.build.assetsSubDirectory, '[name].[contenthash].css')),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: process.env.NODE_ENV === 'testing'
    //     ? 'index.html'
    //     : config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   }
    // })
  ]
})

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    tmp = entry.split('/').splice(2);
    pathname = tmp.join('/').replace(extname,''); // 正确输出js和html的路径
    entries[pathname] = entry;
  });
//  console.log(entries);
  return entries;
}

var pages = getEntry('./source/**/*.html');

var commonsChunkPluginConf = {
  name: 'vendors',
  chunks: Object.keys(pages),
  // minChunks是指一个文件至少被require几次才会被放到CommonChunk里，如果minChunks等于2，说明一个文件至少被require两次才能放在CommonChunk里
  minChunks: 2 // 提取所有chunks共同依赖的模块
};
module.exports.plugins.push(new CommonsChunkPlugin(commonsChunkPluginConf));

for (var pathname in pages) {
  //console.log(pages[pathname],pathname);
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',
    chunks: ['vendors', 'js/'+pathname],
    template: pages[pathname], // 模板路径
    inject: true              // js插入位置
  };
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
