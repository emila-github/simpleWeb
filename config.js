// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var applicationRoot = __dirname.replace(/\\/g,"/"),
  mockRoot = applicationRoot + '/mocks/api',
  mockFilePattern = '.?(json|js)',
  //mockFilePattern = '.json',
  mockRootPattern = mockRoot + '/**/*' + mockFilePattern,
  apiRoot = '/api';


module.exports = {
  build: {
    applicationRoot: applicationRoot,
    //mockRoot: applicationRoot + '/mocks/api',
    mockRoot: mockRoot,
    mockFilePattern: mockFilePattern,
    //mockRootPattern: mockRoot + '/**/*' + mockFilePattern,
    mockRootPattern: mockRootPattern,
    apiRoot: apiRoot,
    // index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsMocksDirectory: 'mocks',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {
      //'/mocks':{
      //  target:'http://localhost:8080',
      //  changeOrigin:true,
      //  pathRewrite:{
      //    '^/vue':' '
      //  }
      //}
    }
  }
}
