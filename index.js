

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
