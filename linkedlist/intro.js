const { prettify } = require("razorpay/dist/utils/razorpay-utils");

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
  pop() {
    if (!this.size) return "Empty list";

    if (!this.head.next) {
      // If there's only one element in the list
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    let temp = current.next;
    this.tail = current;
    this.tail.next = null;
    this.size--;
    return temp;
  }
  insert(index, value) {
    if (index < 0 || index > this.size) {
      return "Index out of range";
    }

    let newNode = new node(value);

    if (index === 0) {
      // Inserting at the beginning
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        // If the list was empty, update tail
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      newNode.next = current.next;
      current.next = newNode;

      if (!newNode.next) {
        // If the new node is the new tail
        this.tail = newNode;
      }
    }

    this.size++;
  }
  travers(val) {
    let dummy = new node(null); // Create a dummy node to handle the case where the head node itself is removed
    dummy.next = this.head; // Set the next of the dummy node to the head of the list
    let current = dummy; // Start traversal from the dummy node

    while (current && current.next) {
      if (current.next.value === val) {
        current.next = current.next.next; // Skip the node with the specified value
        this.size--; // Decrement the size of the list
      } else {
        current = current.next; // Move to the next node
      }
    }

    this.head = dummy.next; // Update the head of the list
    return this.head; // Return the head of the modified list
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = prev.next.next;
    }
    this.size--;
    removedNode.next = null; // Ensure proper memory management
    return removedNode;
  }

  check() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log("slow", slow);
    console.log("fast", fast);
  }
  removeElement(val) {
    let dummy = this.head;
    let current = this.head;
    while(current && current.next){
      if
    }
  }
}
let single = new singleLinkedList();
// newNode.next = new node("jeevan");
single.push("1");
single.push("2");
single.push("6");
single.push("3");
single.push("4");
single.push("5");
single.push("6");
// single.push("Mounika");
// console.log(single.push("Jeevan"));
// console.log(single.push("WEbd"));
// console.log(single.insert(3, "BJP"));
// console.log(single.check());
console.log(single.remove(3));
// console.log(single.travers(6));
