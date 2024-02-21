const search = require('../index');

describe('Search function', () => {
    test('Should find target when it exists', () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 9;
        expect(search(nums, target)).toBe(4);
    });

    test('Should return -1 when target does not exist', () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 2;
        expect(search(nums, target)).toBe(-1);
    });

    test('Should return -1 for empty array', () => {
        const nums = [];
        const target = 5;
        expect(search(nums, target)).toBe(-1);
    });
});