const Stack = require('../stack');

describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('initial stack', () => {
    it('initial stack is empty', () => {
      expect(stack.size).toBe(0);
    });

    it('should throw error if try stack pop when stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('stack is empty');
    });
  });

  it('push', () => {
    stack.push(1);
    expect(stack.size).toBe(1);
    expect(stack.top).toBe(1);
  });
});
