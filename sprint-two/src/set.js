var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  return this.storage.includes(item);
};

setPrototype.remove = function(item) {
  this.storage = this.storage.filter(function (element) {
    return element !== item;
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
