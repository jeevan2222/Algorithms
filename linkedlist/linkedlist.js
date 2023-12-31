class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
  insert(value, index) {
    if (index < 0 || this.size < index) {
      console.log("invalid Index");
      return;
    } else if (index == 0) {
      this.prepend(value);
    } else {
      let addNode = new node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      addNode.next = prev.next;
      prev.next = addNode;
      this.size++;
    }
  }
  removeList(index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index>>>>");
      return null;
    } else if (index === 0) {
      var removedNode = this.head;
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = this.head;
      }
      var removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  append(value) {
    const addNode = new node(value);
    if (this.isEmpty()) {
      this.head = addNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = addNode; // Corrected from `node` to `addNode`
    }
    this.size++;
  }

  prepend(value) {
    const addNode = new node(value);
    if (this.isEmpty()) {
      this.head = addNode;
    } else {
      addNode.next = this.head;
      this.head = addNode;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List Is Empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log("list", listValues);
    }
  }
}

const link = new linkedList();
link.prepend(10);
link.prepend(20);
link.prepend(30);
// link.append(40);
// link.print();
console.log("print");
// link.insert(50, 3);
// link.print();
console.log(link.removeList(1));

console.log("size", link.getSize());
console.log("Empty", link.isEmpty());
