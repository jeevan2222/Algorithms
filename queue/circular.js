class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLen = 0;
    this.capacity = capacity;
  }

  isEmpty() {
    return this.currentLen === 0;
  }

  isFull() {
    return this.currentLen === this.capacity;
  }

  enqueue(ele) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = ele;
      this.currentLen = this.currentLen + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLen = this.currentLen - 1;
      if (this.isEmpty()) {
        this.rear = -1;
        this.front = -1;
      }
      return item;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let result = [];
      let i = this.front;
      do {
        result.push(this.items[i]);
        i = (i + 1) % this.capacity;
      } while (i !== (this.rear + 1) % this.capacity);

      console.log("Queue elements:", result.join(", "));
    }
  }
}

let n = new CircularQueue(5);
console.log(n.isEmpty());
n.enqueue(6);
n.enqueue(16);
n.enqueue(26);
n.print();
console.log("Dequeued:", n.dequeue());
n.print();
