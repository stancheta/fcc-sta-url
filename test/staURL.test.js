var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var staURL = require('../lib/staURL');
var validateURL = staURL.validateURL;
var getCharacter = staURL.getCharacter;
var getNewID = staURL.getNewID;

describe('validateURL', function() {
  it('should return a boolean', function() {
      assert.equal('boolean', typeof(validateURL('hello')));
  });
  it('should return true when given http://foo.com', function() {
      assert.equal(true, validateURL('http://foo.com'));
  });
  it('should return true when given https://foo.com', function() {
      assert.equal(true, validateURL('https://foo.com'));
  });
  it('should return true when given http://www.foobar.com/', function() {
      assert.equal(true, validateURL('http://www.foobar.com/'));
  });
  it('should return true when given https://www.foo.co.uk', function() {
      assert.equal(true, validateURL('https://www.foo.co.uk'));
  });
  it('should return false when given www.foo.com', function() {
      assert.equal(false, validateURL('www.foo.com'));
  });
  it('should return false when given foobar.de', function() {
      assert.equal(false, validateURL('foobar.de'));
  });
  it('should return false when given http:/www.foo.com', function() {
      assert.equal(false, validateURL('http:/www.foo.com'));
  });
  it('should return false when given http://foo', function() {
      assert.equal(false, validateURL('http://foo'));
  });
});

describe('getCharacter', function() {
  it('should return a string');
  it('should return 0 when given 0');
  it('should return 9 when given 9');
  it('should return a when given 10');
  it('should return z when given 35');
  it('should return A when given 36');
  it('should return Z when given 61');
});

describe('getNewID', function() {
  it('should return an array of length 4');
});
