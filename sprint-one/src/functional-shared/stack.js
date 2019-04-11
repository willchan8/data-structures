var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  someInstance.count = 0;

  extend(someInstance, stackMethods);

  return someInstance;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var toBePopped = this.storage[this.count - 1];
  if (this.count > 0) {
    delete this.storage[this.count - 1];
    this.count--;
  }
  return toBePopped;
};

stackMethods.size = function() {
  return this.count;
};