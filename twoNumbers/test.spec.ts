const { twoSum } = require('./solution');

describe('twoSum', () => {
    it('for [2,3,9,11] returns [1,2]', () => {
        expect(twoSum([2,3,9,11], 12)).toEqual([1,2])
    })

    it('for [3,2,4] returns [1,2]', () => {
        expect(twoSum([3,2,4], 6)).toEqual([1, 2])
    })
});
