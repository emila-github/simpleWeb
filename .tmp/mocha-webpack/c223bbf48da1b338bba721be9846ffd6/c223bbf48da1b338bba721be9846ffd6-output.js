/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var testsContext = __webpack_require__(1);

	var runnable = testsContext.keys();

	runnable.forEach(testsContext);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./js/add.test.js": 2,
		"./js/add2.test.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var add = __webpack_require__(3);
	var expect = __webpack_require__(4).expect;

	describe('加法函数的测试', function () {
	    it('1 加 1 应该等于 2', function () {
	        expect(add(1, 1)).to.be.equal(2);
	    });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function add(x, y) {
	    return x + y;
	}

	module.exports = add;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _add = __webpack_require__(6);

	var _add2 = _interopRequireDefault(_add);

	var _chai = __webpack_require__(4);

	var _chai2 = _interopRequireDefault(_chai);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var expect = _chai2.default.expect;

	describe('加法函数的测试2', function () {
	    it('1 加 1 应该等于 2-1', function () {
	        expect((0, _add2.default)(1, 1)).to.be.equal(2);
	    });
	});

	describe('加法函数的测试2', function () {
	    it('1 加 1 应该等于 2-2', function () {
	        expect((0, _add2.default)(1, 1)).to.be.equal(2);
	    });
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	function add2(x, y) {
	    return x + y;
	}

	module.exports = add2;

/***/ }
/******/ ]);
//# sourceMappingURL=c223bbf48da1b338bba721be9846ffd6-output.js.map