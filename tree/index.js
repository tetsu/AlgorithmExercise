// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }

  add(data){
    this.children.push(new Node(data));
  }

  remove(data){
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  // Traverse Breadth First with While Loop
  traverseDF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
  // Traverse Breadth First with Recursive
  // traverseDF(fn, node=this.root){
  //   fn(node);
  //   for(let child of node.children){
  //     this.traverseDF(fn, child);
  //   }
  // }
}

module.exports = { Tree, Node };
