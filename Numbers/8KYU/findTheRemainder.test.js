const { remainder } = require('./findTheRemainder');

test('should find the remainder', () => {
	expect(remainder(17, 5)).toBe(2);
    expect(remainder(1, 0)).toBe(NaN);
    expect(remainder(0, 0)).toBe(NaN);
    expect(remainder(13, 72)).toBe(7);
    expect(remainder(72, 13)).toBe(7);
});
