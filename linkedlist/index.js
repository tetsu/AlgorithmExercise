// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data=null, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let pointer = this.head;
    let counter = 0;
    while(pointer){
      pointer = pointer.next;
      counter++;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let pointer = this.head;
    while(pointer && pointer.next) pointer = pointer.next;
    return pointer;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    this.head = this.head ? this.head.next : null;
  }

  removeLast(){
    if(!this.head) return;
    if(!this.head.next) {this.head = null; return;}
    let current = this.head.next;
    let previous = this.head;
    while(current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  insertLast(data){
    if(!this.head) return this.head = new Node(data);
    this.getLast().next = new Node(data);
  }

  getAt(index){
    let pointer = this.head;
    let counter = 0;
    while(pointer){
      if(index === counter) return pointer;
      pointer = pointer.next;
      counter++;
    }
    return null;
  }

  removeAt(index){
    if(!this.head || this.size() <= index) return;
    if(index === 0) this.head = this.head.next;
    if(this.getAt(index-1) && this.getAt(index)){
      this.getAt(index-1).next = this.getAt(index).next;
    }
    return;

    // if(!this.head || this.size() <= index) return;
    // let previous = null;
    // let current = this.head;
    // for(let i=0; i<index; i++){
    //   previous = current;
    //   current = current.next;
    // }
    // if(!previous) this.head = current.next;
    // else previous.next = current.next;
  }

  insertAt(data, index){
    if(!this.head || index===0) {
      this.insertFirst(data);
    } else if(this.getAt(index-1)){
      this.getAt(index-1).next = new Node(data, this.getAt(index));
    } else {
      this.insertLast(data);
    }

    // if(this.size() === 0 || n === 0 ) {
    //   this.insertFirst(data);
    //   return;
    // }
    // let previous = null;
    // let current = this.head;
    // for(let i=0; i<n; i++){
    //   if(!current){
    //     previous.next = new Node(data);
    //     return;
    //   }
    //   previous = current;
    //   current = current.next;
    // }
    // const newNode = new Node(data);
    // previous.next = newNode;
    // newNode.next = current;
  }

  forEach(fn){
    let current = this.head;
    let counter = 0;
    while(current){
      fn(current, counter);
      current = current.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  midpoint() {
    let slow = this.head;
    let fast = this.head;
    while(fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  circular() {
    let slow = this.head;
    let fast = this.head;
    while(fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast) return true;
    }
    return false;
  }

  fromLast(list, n) {
    let slow = this.head;
    let fast = this.head;
    while(n>0){
      if(!fast.next) return null
      fast = fast.next;
      n--;
    }
    while(fast.next){
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
}

// const list = new LinkedList();
// list.head;
// list.insertLast('1');
// list.insertLast('2');
// list.insertLast('3');
// list.insertLast('4');
// list.insertLast('5');
// list.getAt(0);
// list.getAt(1);
// list.getAt(5);
//
// debugger;

module.exports = { Node, LinkedList };
