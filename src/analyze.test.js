const analyze = require('./analyze');

test('Array analyzed', () => {
  expect(analyze([1, 2, 1, 4])).toEqual({
    average: 2,
    min: 1,
    max: 4,
    length: 4,
  });
});
