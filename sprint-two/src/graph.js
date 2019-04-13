

// Instantiate a new graph
var Graph = function() {
  // this.value = null;
  // this.edge = [];
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
// time complexity - O(?)
// I - number (node's value)
// O - creates a node and adds it to graph
// C - none
// E - has to take in a value
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// time complexity - O(?)
// I - value (number)
// O - boolean
// C - none
// E - has to take in a value
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
// time complexity - O(?)
// I - value (number)
// O - deletes the node
// C - none
// E - has to take in a value
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  }
  
  // key into edges
  for (var key in this.edges) {
    // check if key matches deleted node
    if (key === node) {
      //if if does then delete that key and value
      delete this.edges[key];
    }
    for (var i = 0; i < this.edges[key].length; i++) {
      this.edges[key].splice(this.edges[key].indexOf(node), 1);
    } 
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// time complexity - O(?)
// I - two numbers
// O - boolean
// C - none
// E - has to take in a value
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // iterate through both edges of fromNode and toNode
    // if they both have edges of each other
      // return true
  // given a fromNode, check to see if toNode is in fromNode's edge array
  var fromNodeEdgeArray = this.edges[fromNode];
  var toNodeEdgeArray = this.edges[toNode];
  
  var fromNodeHas = false;
  var toNodeHas = false;

  // check to see if toNode is in fromNodeEdgeArray
  for (var i = 0; i < fromNodeEdgeArray.length; i++) {
    if (toNode === fromNodeEdgeArray[i]) {
      fromNodeHas = true;
    }
  }

  for (var i = 0; i < toNodeEdgeArray.length; i++) {
    if (fromNode === toNodeEdgeArray[i]) {
      toNodeHas = true;
    }
  }

  if (fromNodeHas && toNodeHas) {
    return true;
  }
  else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
// time complexity - O(?)
// I - two numbers, node that we want to connect from, and node that we want to connect to 
// O - no return, adds number to edge array
// C - none
// E - has to take in two numbers
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
// time complexity - O(?)
// I - two values
// O - remove edges between values
// C - none
// E - none
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // loop through edge[fromNode]
    //splice out toNode
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (toNode === this.edges[fromNode][i]) {
      this.edges[fromNode].splice(i, 1);
    }
  }
  // loop through edge[toNode]
    //splice out fromNode
  for (var i = 0; i < this.edges[toNode].length; i++) {
    if (fromNode === this.edges[toNode][i]) {
      this.edges[toNode].splice(i, 1);
    }
  }
};  

// Pass in a callback which will be executed on each node of the graph.
// time complexity - O(?)
// I - 
// O - 
// C - 
// E - 
Graph.prototype.forEachNode = function(cb) {
  // perform a callback on each node item
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
graph = new Graph();
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.addEdge(3, 2);
console.log(graph.hasEdge(3, 2)); //true
console.log(graph.hasEdge(3, 1)); //false
