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
link.append(40);
console.log("print");
link.print();
console.log("size", link.getSize());
console.log("Empty", link.isEmpty());
