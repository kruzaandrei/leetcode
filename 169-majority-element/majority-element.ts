function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = null;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++
        } else {
            count--;
        }
    }
    
    return candidate
};