const { sumStr } = require('./sumTheStrings');

test('should add strings as numbers', () => {
	expect(sumStr('4', '5')).toBe('9');
	expect(sumStr('2', '2')).toBe('4');
	expect(sumStr('5', '9')).toBe('14');
	expect(sumStr('14', '16')).toBe('30');
});