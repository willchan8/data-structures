class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var firstKey = keys[0];
    var toBeDequeued = this.storage[firstKey];
    delete this.storage[firstKey];
    return toBeDequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}