class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// let test = new node("jeeva");
// test.next = new node("mouni");
// test.next.next = new node("tets");

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
      this.tail = this.head;
    } else {
      this.next = newNode;
      this.tail = this.next;
    }
    this.size++;
  }
}
console.log(test);
