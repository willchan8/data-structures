var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // container for storing children
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

// parent
var firstParent = undefined;

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  var child = Tree(value);
  this.children.push(child);
  
  if (firstParent === undefined) {
    firstParent = child;
  }
  // set newTree.children to the new instance of the child
};

treeMethods.contains = function(target) {
  // takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  
  // NOTE: use recursion like getElementsByClassName
  // create inner recursive function taking in target and array as parameters
    // iterate over newTree.children
  var findTarget = function(target, node) {
    node = node || firstParent;
    for (var i = 0; i < node.children; i++) {
      if (node.children[i].value === target) {
        return true;
      } else {
        return findTarget(target, node.children[i]);
      }
    }
    return false;
  }
  // invoke the recursive function passing the parent (ex: document.body) as the argument
  return findTarget(target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

