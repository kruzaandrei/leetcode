/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let num = 0;
    while (k != 0) {
        num = nums.pop();
        nums.unshift(num)
        k--;
    }
};