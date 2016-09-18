// add.test.js
import add from './add2.js';
import chai from 'chai';
let expect = chai.expect;

describe('加法函数的测试2', function() {
    it('1 加 1 应该等于 2-1', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});

describe('加法函数的测试2', function() {
    it('1 加 1 应该等于 2-2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});