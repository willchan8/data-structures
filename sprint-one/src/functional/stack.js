var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
  // Add to the top (becomes largest index)
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
  // Remove from the top (removes largest index)
    var toBePopped = storage[count - 1];
    if (count > 0) {
      delete storage[count - 1];
      count--;
    }
    return toBePopped;
  };

  someInstance.size = function() {
  // 'Length' of object
    return count;
  };

  return someInstance;
};
