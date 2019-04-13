

var HashTable = function() {
  this._limit = 8; // number of storage spaces (NOT length)
  this._storage = LimitedArray(this._limit); //
};

// I - key (string), value (string)
// O - no output, adds [key, value] to bucket depending on the output number of the hash function
// C - O(c) - O(n)
// E - input is not a string
HashTable.prototype.insert = function(k, v) {
  // turns k into a number that can be used as an index for storage
  var index = getIndexBelowMaxForKey(k, this._limit);

  // set storage at index to empty bucket if storage[index] is undefined
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  // if we run retrieve with the key (k) and !== undefined
  if (this.retrieve(k) !== undefined) {
    // run remove with the key (k) as inputs
    this.remove(k);
  }
  // store key value pair as a tuple in bucket
  this._storage.get(index).push([k, v]);
};

// I - key (string)
// O - returns the value (string) at the given key (string)
// C - O(c) - O(n)
// E - input is not a string
HashTable.prototype.retrieve = function(k) {
  // turns k into a number that can be used as an index for storage
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get access to bucket array at index (use get method)
  var bucket = this._storage.get(index);
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // check each tuple's first index to see if it equals k
    if (bucket[i][0] === k) {
      // return the value if true
      return bucket[i][1];
    }
  }
};

// I - key (string)
// O - delete tuple that key resides in
// C - O(c) - O(n)
// E - input is not a string
HashTable.prototype.remove = function(k) {
  // turns k into a number that can be used as an index for storage
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get access to bucket array at index (use get method)
  var bucket = this._storage.get(index);

    // iterate through the bucket
    for (var i = 0; i < bucket.length; i++) {
      // check each tuple's first index to see if it equals k
      if (bucket[i][0] === k) {
        // delete tuple if true
        bucket.splice(i, 1);
      }
    }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


