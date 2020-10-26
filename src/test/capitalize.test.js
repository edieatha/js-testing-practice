import capitalize from '../capitalize'

test('Capitalize string => hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});
