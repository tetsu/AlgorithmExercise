// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null){
  if(!node) return true;
  if(!node.left && !node.right) return true;
  console.log(node);

  let left = null;
  let right = null;

  if(node.left){
    if(node.left.data > node.data) {
      left = false;
    } else {
      min = node.left.data;
      left = validate(node.left, min, node.data);
    }
  } else {
    left = true;
  }

  if(node.right){
    if(node.data > node.right.data) right = false;
    else {
      max = node.right.data;
      right = validate(node.right, min, node.data);
    }
  } else {
    left = true;
  }

  console.log('data:'+node.data, 'min:'+min, 'max:'+max, 'left:'+left, 'right:'+right);

  return left && right;
}

module.exports = validate;
