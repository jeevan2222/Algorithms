class ob {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
    console.log("front", this.front, "rear", this.rear);
  }
  enqueue(ele) {
    this.items[this.rear] = ele;
    this.rear++;
  }
  dequeue(ele) {
    let item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    return [...this.items];
  }
}

let ab = new ob();
ab.enqueue(3);
ab.enqueue(13);
ab.enqueue(23);
console.log(ab.dequeue());
console.log(ab.peek());
console.log(ab.size());
