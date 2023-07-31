const Stack = require('../stack');

describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('initial stack is empty', () => {
    expect(stack.size).toBe(0);
  });
});
