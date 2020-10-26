import calculator from '../calculator';

test('add 2 + 2', () => {
  expect(calculator(2, 2).add()).toBe(4);
});

test('subtract 2 - 2', () => {
  expect(calculator(2, 2).subtract()).toBe(0);
});

test('divide 2 / 2', () => {
  expect(calculator(2, 2).divide()).toBe(1);
});

test('divide 2 / 0', () => {
  expect(calculator(2, 0).divide()).toBe('Error divide by zero');
});

test('add two string', () => {
  expect(() => {
    calculator('a', 'b').add();
  }).toThrow('You must provide a number.');
});
