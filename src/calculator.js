const calculator = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('You must provide a number.');
  }
  const add = () => a + b;
  const subtract = () => a - b;
  const divide = () => {
    if (b === 0) {
      return 'Error divide by zero';
    }
    return a / b;
  };
  const multiply = () => a * b;
  return {
    add,
    subtract,
    divide,
    multiply,
  };
};
export default calculator;
