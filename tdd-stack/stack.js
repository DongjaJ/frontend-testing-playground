class Stack {
  size;
  stackTop;
  data;
  constructor() {
    this.size = 0;
    this.stackTop = -1;
    this.data = [];
  }

  push(value) {
    this.stackTop += 1;
    this.data[this.stackTop] = value;
    this.size += 1;
  }

  get top() {
    return this.data[this.stackTop];
  }

  pop() {
    if (this.size === 0) throw new Error('stack is empty');
  }
}

module.exports = Stack;
