function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode;
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left;
      if(currentNode){
        findOrAdd(currentNode, newNode);
        return true;
      } else {
        rootNode.left = newNode;
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right;
    if(currentNode){
      findOrAdd(currentNode, newNode);
      return true;
    } else {
      rootNode.right = newNode;
    }
  }
}

function max(node) {
  if (node.right !== null) {
    max(node.right);
  } else {
    return node;
  }
}

function min(node) {
  if (node.left !== null) {
    min(node.left);
  } else {
    return node;
  }
}
