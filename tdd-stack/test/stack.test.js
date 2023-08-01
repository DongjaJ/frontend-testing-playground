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

  describe('pop', () => {
    it('pop one element', () => {
      stack.push(1);
      const item = stack.pop();
      expect(stack.size).toBe(0);
      expect(item).toBe(1);
      expect(() => {
        stack.top;
      }).toThrow('stack is empty');
    });

    it('pop multi element', () => {
      const testCases = [1, 2, 3, 4, 5];
      const expectResult = [5, 4, 3, 2, 1];
      const testResult = [];

      testCases.forEach((testCase) => stack.push(testCase));
      while (stack.size) {
        testResult.push(stack.pop());
      }

      expect(testResult).toEqual(expectResult);
    });
  });
});
