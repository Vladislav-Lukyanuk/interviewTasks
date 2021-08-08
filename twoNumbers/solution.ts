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

export function twoSumBrutForce (nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}
