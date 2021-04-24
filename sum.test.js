const sum = require('./sum');

testArr = [1,2,3]

test('finds lowest two numbers in an array and adds them together', () => {
  expect(sum(testArr)).toBe(3);
});

