export function twoSum(nums: number[], target: number): number[] {
    const indexes = {};

    for (let i = 0; i < nums.length; i++) {
        if (indexes[target - nums[i]] !== undefined) {
            return [indexes[target - nums[i]], i];
        }

        indexes[nums[i]] = i;
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
