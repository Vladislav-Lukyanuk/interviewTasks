export function twoSum(nums: number[], target: number): number[] {
    const availableNumbers = [];

    for(let index = 0; index < nums.length; index++) {
        const secondNum = target - nums[index];

        if(availableNumbers[secondNum] !== undefined) {
            return [availableNumbers[secondNum], index];
        }

        availableNumbers[nums[index]] = index;
    }

    return [];
}
