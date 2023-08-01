class Stack {
  stackSize;
  stackTop;
  data;
  constructor() {
    this.stackSize = 0;
    this.stackTop = -1;
    this.data = [];
  }

  push(value) {
    this.stackTop += 1;
    this.data[this.stackTop] = value;
    this.stackSize += 1;
  }

  get top() {
    if (this.stackSize === 0) throw new Error('stack is empty');
    return this.data[this.stackTop];
  }

  pop() {
    if (this.stackSize === 0) throw new Error('stack is empty');
    const item = this.data[this.stackTop];
    this.stackSize -= 1;
    this.stackTop -= 1;
    return item;
  }

  get size() {
    return this.stackSize;
  }
}

module.exports = Stack;
