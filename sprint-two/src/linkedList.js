var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  var nodeIndex = 0;
  

  list.addToTail = function(value) {
    var ourNode = Node(value);
    list[nodeIndex] = ourNode;
    
    if (list.head === null && list.tail === null) {
      list.head = list[nodeIndex];
      list.tail = list[nodeIndex];
    } else {
      list.tail = list[nodeIndex];
      list[nodeIndex - 1].next = list.tail;
    }
    nodeIndex++;
  };

  list.removeHead = function() {
    var toBeRemoved = list.head;
    var nextValue = toBeRemoved.next;
    delete list.head;
    list.head = nextValue;
    return toBeRemoved.value;    
  };

  list.contains = function(target) {

    var found = false;
    var findTarget = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {
        return findTarget(node.next);
      }
      return found;
    }           

    return findTarget(list.head);    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
