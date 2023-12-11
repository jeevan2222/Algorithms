class queue {
  constructor() {
    this.items = [];
    // this.rear = 0;
    // this.front = 0;
  }
  enqueue(ele) {
    this.items.push(ele);
  }
  dequeue() {
    return this.items.shift();
  }
  print() {
    return [...this.items];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[0];
  }
}
let ob = new queue();
ob.enqueue(6);
ob.enqueue(16);
ob.enqueue(26);
console.log(ob.peek());
