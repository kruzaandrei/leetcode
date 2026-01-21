function twoSum(nums: number[], target: number): number[] {
    const numberToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numberToIndex.has(complement)) {
            return [numberToIndex.get(complement), i];
        }

        numberToIndex.set(nums[i], i);
    }

    return [];
};

