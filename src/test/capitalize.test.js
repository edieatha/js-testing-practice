const capitalize = require('../capitalize');

test('Capitalize string => hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});
