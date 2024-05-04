class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    else if (this.size == 1) {
      this.first = null;
      this.last = null;
      this.size--;
    } else {
      let temp = this.first;
      this.first = temp.next;
      this.size--;
      return temp.val;
    }
  }
}
let stack = new Stack();
stack.push("Hi");
stack.push("jeevan");
stack.push("How");
console.log(stack.pop());
