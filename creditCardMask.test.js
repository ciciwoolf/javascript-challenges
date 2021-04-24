const maskify = require('./creditCardMask');

testNum = "4556364607935616";

test('finds lowest two numbers in an array and adds them together', () => {
  expect(maskify(testNum)).toBe("############5616");
});

