class Calculator {
  constructor() {}

  set(num) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num) {
    this.value = this.value + num;
  }
  subtract(num) {
    this.value = this.value - num;
  }
  multiply(num) {
    this.value = this.value * num;
  }
  divide(num) {
    this.value = this.value / num;
  }
}

module.exports = Calculator;
