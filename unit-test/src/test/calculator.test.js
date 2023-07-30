const Calculator = require('../calculator');

describe('calculator test', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('inits with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('set 3 to equal 3', () => {
    calculator.set(3);
    expect(calculator.value).toBe(3);
  });

  it('clear calculator value', () => {
    calculator.set(3);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  it('add 2 + 5 to equal 7', () => {
    calculator.set(2);
    calculator.add(5);
    expect(calculator.value).toBe(7);
  });

  it('subtract 9 - 3 to equal 6', () => {
    calculator.set(9);
    calculator.subtract(3);
    expect(calculator.value).toBe(6);
  });
  it('multiply 3 * 7 to equal 21', () => {
    calculator.set(3);
    calculator.multiply(7);
    expect(calculator.value).toBe(21);
  });
  describe('divide', () => {
    it('0 / 0 === NAN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });

    it('15/3 === 5', () => {
      calculator.set(15);
      calculator.divide(3);
      expect(calculator.value).toBe(5);
    });
  });
});
