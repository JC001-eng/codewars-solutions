const { isPalindrome } = require('./palindrome');

test('returns true on strings that are palindromes', () => {
	expect(isPalindrome('abcba')).toBe(true);
	expect(isPalindrome('.!!.')).toBe(true);
	expect(isPalindrome('a')).toBe(true);
	expect(isPalindrome('')).toBe(true);
	expect(isPalindrome('aba')).toBe(true);
});

test('returns false on strings that are not palindromes', () => {
	expect(isPalindrome('abc')).toBe(false);
	expect(isPalindrome('!@#')).toBe(false);
});

test('handles non-string inputs gracefully', () => {
	expect(isPalindrome(12)).toBe(false);
	expect(isPalindrome(true)).toBe(false);
	expect(isPalindrome({})).toBe(false);
	expect(isPalindrome(undefined)).toBe(false);
});