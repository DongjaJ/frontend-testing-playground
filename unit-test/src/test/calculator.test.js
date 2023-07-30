const Calculator = require('../calculator');

describe('calculator test', () => {
  const calculator = new Calculator();

  it('set 3 to equal 3', () => {
    calculator.set(3);
    expect(calculator.value).toBe(3);
  });

  it('clear calculator value', () => {
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  it('add 0 + 2 to equal 2', () => {
    calculator.add(2);
    expect(calculator.value).toBe(2);
  });

  it('subtract 2 - 1 to equal 1', () => {
    calculator.subtract(1);
    expect(calculator.value).toBe(1);
  });
  it('multiply 1 * 6 to equal 6', () => {
    calculator.multiply(6);
    expect(calculator.value).toBe(6);
  });
  it('divide 6 / 2 to equal 3', () => {
    calculator.divide(2);
    expect(calculator.value).toBe(3);
  });
});
