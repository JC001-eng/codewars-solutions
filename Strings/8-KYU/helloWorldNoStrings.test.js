const { helloWorld } = require('./helloWorldNoStrings');

test('should output hello world', () => {
  const result = helloWorld();
  expect(result).toEqual("Hello, World!")
})