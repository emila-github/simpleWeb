// add.test.js
var add = require('./add2.js');
var expect = require('chai').expect;

describe('加法函数的测试2', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});