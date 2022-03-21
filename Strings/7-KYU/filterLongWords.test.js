const { filterLongWords } = require('./filterLongWords');

test('should return array of words longer than 4', () => {
  expect(filterLongWords("The quick brown fox jumps over the lazy dog", 4)).toStrictEqual(['quick', 'brown', 'jumps']);
})