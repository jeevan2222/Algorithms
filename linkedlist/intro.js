class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class singleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  travers() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
let single = new singleLinkedList();
// newNode.next = new node("jeevan");
single.push("Hi");
single.push("Mounika");
console.log(single.push("Jeevan"));
console.log(single.travers());
// single.push("Jeevan");
