class Stack {
  _size;
  _top;
  constructor() {
    this._size = 0;
    this._top = null;
  }

  push(value) {
    const node = { value, next: this._top };
    this._top = node;
    this._size += 1;
  }

  get top() {
    if (this._top === null) throw new Error('stack is empty');
    return this._top.value;
  }

  pop() {
    if (this._top === null) throw new Error('stack is empty');
    const item = this._top;
    this._size -= 1;
    this._top = this._top.next;
    return item.value;
  }

  get size() {
    return this._size;
  }
}

module.exports = Stack;
