var myModel = function() {
  var store = {};

  return {
    set: function(name, value) {
      store[name] = value;
    },
    get: function(name){
      return store[name];
    }
  };
};
module.exports = myModel;
