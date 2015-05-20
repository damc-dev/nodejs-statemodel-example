var assert = require("assert")
var model = require('../simple-model')();

describe('simple model', function() {
  describe('store a string value', function(done) {
    it('should contain the string value', function() {
      model.set('greeting', 'Hello, World!');

      assert.equal('Hello, World!', model.get('greeting'));
    });
  });
  describe('store an object value', function(done) {
    it('should contain the object', function() {
      model.set('someObj', { greeting: 'Hello'});
      assert.deepEqual({ greeting: 'Hello'}, model.get('someObj'));
    })
  })
});
