var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};

  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstKey = keys[0];
  var toBeDequeued = this.storage[firstKey];
  delete this.storage[firstKey];
  return toBeDequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};