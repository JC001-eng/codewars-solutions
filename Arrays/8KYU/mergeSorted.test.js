const { mergeArrays } = require('./mergeSorted');

test('should merge already sorted arrays', () => {
	const arr1 = [1, 2, 3, 4];
	const arr2 = [5, 6, 7, 8];
	const result = mergeArrays(arr1, arr2);
	expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
	expect(result).not.toContain(9);
});

test('should merge and sort unsorted arrays', () => {
	const arr1 = [3, 1, 6, 9];
	const arr2 = [5, 4, 2, 7, 8];
	const result = mergeArrays(arr1, arr2);
	expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});