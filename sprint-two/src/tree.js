var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // container for storing children
  newTree.children = [];
  newTree.addChild  = treeMethods.addChild;
  newTree.contains  = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  var child = Tree(value);
  this.children.push(child);
};

// time complexity - O(n)
// I - target (number)
// O - boolean (if tree contains target)
// C - must be linear time complexity!
// E - invalid inputs, tree only contains one node, tree = undefined
treeMethods.contains = function(target) {
  debugger;
  if (this.value === target) {
    return true;
  }
  // children cases
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true; 
    }
  }
  
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

