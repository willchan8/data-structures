var Queue = function() {
  var someInstance = {}; // the three functions below are added to the 'someInstance'

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // Add to the back
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    // Remove from the front (remove smallest index)
    var keys = Object.keys(storage);
    var firstKey = keys[0];
    var toBeDequeued = storage[firstKey];
    delete storage[firstKey];
    return toBeDequeued;
  };

  someInstance.size = function() {
    // 'Length' of the object
    return Object.keys(storage).length;
  };

  return someInstance;
};