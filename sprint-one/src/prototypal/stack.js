var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};

  someInstance.count = 0;

  return someInstance;
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