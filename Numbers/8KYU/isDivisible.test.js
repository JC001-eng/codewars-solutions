const { isDivisible } = require('./isDivisible');

test('should be divisible', () => {
	expect(isDivisible(3, 3, 4)).toBe(false);
	expect(isDivisible(12, 3, 4)).toBe(true);
});

test('should gracefully handle unexpected inputs', () => {
	expect(isDivisible()).toBe(false);
	expect(isDivisible(1, 3)).toBe(false);
	expect(isDivisible('string', 'foo', 'bar')).toBe(false);
});