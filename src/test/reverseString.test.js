const reverseString = require('../reverseString');

test('Reverse string => hello', () => {
  expect(reverseString('hello')).toBe('olleh');
});
