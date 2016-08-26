var path = require('path')
var fs = require("fs")
var glob = require("glob")
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)



var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  //console.log(options)
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

/* Configure a simple logger and an error handler. */
//app.use(morgan('combined'));
//app.use(errorhandler());

//var joinController = require('../mocks/api/add.do.js');
//app.get('/mocks/api/add.do.js', joinController);

/* Read the directory tree according to the pattern specified above. */
var files = glob.sync(config.build.mockRootPattern);


/* Register mappings for each file found in the directory tree. */
if(files && files.length > 0) {
  files.forEach(function(fileName) {
    //console.log('fileName=%s',fileName)
    var extname = path.extname(fileName);
    //var mapping = config.build.apiRoot + fileName.replace(config.build.mockRoot, '').replace(config.build.mockFilePattern,'');
    var mapping = config.build.apiRoot + fileName.replace(config.build.mockRoot, '').replace(extname,'');

    if(extname === '.json') {
      app.all(mapping, function (req, res) {
        var data =  fs.readFileSync(fileName, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
        res.end();
      });
    }
    else if(extname === '.js') {
      app.all(mapping, require(fileName));
    }


    console.log('Registered mapping: %s -> %s', mapping, fileName);
  })
} else {
  console.log('No mappings found! Please check the configuration.');
}
//app.get('/mocks/add.do.js', function (req, res) {
//  res.send('Hello World!');
//});

/* Start the API mock server. */
console.log('Application root directory: [' + config.build.applicationRoot +']');
//console.log('Mock Api Server listening: [http://' + ipaddress + ':' + port + ']');



// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)


// serve pure static assets
var staticPath = path.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

//托管静态资源
app.use(express.static('static'));
app.use(express.static('source'));
app.use('/dist', express.static('dist'));
app.use('/static', express.static('dist/static'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
