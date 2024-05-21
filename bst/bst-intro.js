class BST {
  constructor() {
    this.root = null;
  }

  insert(values) {
    let NewNode = new Node(values);
    if (!this.root) {
      this.root = NewNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.values < values) {
          if (current.right == null) {
            current.right = NewNode;
            return this;
          }
          current = current.right;
        } else {
          if (current.left == null) {
            current.left = NewNode;
            return this;
          }
          current = current.left;
        }
      }
    }
  }
  search(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
}
class Node {
  constructor(values) {
    this.values = values;
    this.left = null;
    this.right = null;
  }
}
let tree = new BST();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(20);
tree.insert(18);
// tree.insert(30);
console.log(tree.search(30));
console.log(tree);
