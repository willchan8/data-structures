var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var toBePopped = this.storage[this.count - 1];
  if (this.count > 0) {
    delete this.storage[this.count - 1];
    this.count--;
  }
  return toBePopped;
};

Stack.prototype.size = function() {
  return this.count;
};