import reverseString from '../reverseString';

test('Reverse string => hello', () => {
  expect(reverseString('hello')).toBe('olleh');
});
