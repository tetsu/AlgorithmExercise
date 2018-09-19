// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

/* Stephen's Solution */
function validate(node, min = null, max = null){
  if(max && node.data > max) return false;
  if(min && node.data < min) return false;

  if(node.left && !validate(node.left, min, node.data)) return false;
  if(node.right && !validate(node.right, node.data, max)) return false;

  return true;
}

// /* My Solution */
// function validate(node, min = null, max = null){
//   if(min && node.data < min) return false;
//   if(max && node.data > max) return false;
//
//   let left = null;
//   let right = null;
//
//   if(!node.left) {
//     left = true;
//   } else if(node.left.data > node.data) {
//     left = false;
//   } else {
//     left = validate(node.left, min, node.data);
//   }
//
//   if(!node.right) {
//     right = true;
//   } else if(node.data > node.right.data) {
//     right = false;
//   } else {
//     right = validate(node.right, node.data, max);
//   }
//   return left && right;
// }

module.exports = validate;
