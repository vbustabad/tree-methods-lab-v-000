function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if(currentNode.right){
    inOrder(currentNode.right);
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode;
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left;
      if(currentNode){
        findOrAdd(currentNode, newNode);
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
  } else {
    return true;
  }
}

function max(node) {
  let currentNode = node;

  while (currentNode.right !== null) {
    currentNode = currentNode.right;
  }

  return max(currentNode.right);
}

function min(node) {
  let currentNode = node;

  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }

  return min(currentNode.left);
}
