// I - value
// O - 
// C - Trees can only have 0, 1, 2 children
// E - 
var BinarySearchTree = function(value) {
  // something
  //A .left property, a binary search tree (BST) where all values are lower than the current value.
 // A .right property, a BST where all values are higher than the current value.
 var newBinarySearchTree = {};
 newBinarySearchTree.value = value;
 
 // container for storing children
 newBinarySearchTree.left = null; // lesser child
 newBinarySearchTree.right = null; // greater child
 newBinarySearchTree.insert = binarySearchTreeMethods.insert;
 newBinarySearchTree.contains = binarySearchTreeMethods.contains;
 newBinarySearchTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
 return newBinarySearchTree;
};

// methods container
var binarySearchTreeMethods = {};

// insert method
// I - number value
// O - .insert place's value in the tree at the correct position (sorted)
// C - o(log n), each node can only have two children
// C (cont.) - left child < parent node, right child > parent node 
// E - value must be a number, value given is equal to node value

binarySearchTreeMethods.insert = function(value) {
  // invoke binary search tree function to creat new node

  var newNode = BinarySearchTree(value);

  // left side
  if (value < this.value && this.left === null) {
    this.left = newNode;
  } else if (value < this.value && this.left !== null) {
    this.left.insert(value);
  }

  // right side
  if (value > this.value && this.right === null) {
    this.right = newNode;
  } else if (value > this.value && this.right !== null) {
    this.right.insert(value);
  }
};

// contains method
// I - number
// O - boolean
// C - o(log n)
// E - has to be a number
binarySearchTreeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
 
  if (target < this.value && this.left !== null) {
    if (this.left.contains(target) === true) {
      return true;
    } 
  }
  else if (target > this.value && this.right !== null){
    if (this.right.contains(target) === true) {
      return true;
    }
  }
  return false;
};

// depthFirstLog method
// I - function
// O - executes callback on every value in the tree
// C - O(n)
// E - has to be a function
binarySearchTreeMethods.depthFirstLog = function(callback) {
  // invoke callback on each node's value
  callback(this.value);
  
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var binarySearchTree = BinarySearchTree(5);
binarySearchTree.insert(2);
console.log(binarySearchTree.contains(2))