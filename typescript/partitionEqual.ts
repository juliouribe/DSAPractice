// function rec(nums: number[], cache: boolean[][], target: number, index = 0): boolean {
//     // If no other digits to find, return true.
//     if (target === 0) {
//         return true;
//     }

//     if (target < 0 || index >= nums.length) {
//         return false;
//     }
//     if (cache[index][target] !== null) {
//         return cache[index][target];
//     }
//     let result = false
//     for (let i = index; i < nums.length; i++) {
//         const isValid = rec(nums, cache, target - nums[i], i + 1);
//         if (isValid) {
//             result = true;
//             break
//         }
//     }
//     cache[index][target] = result;
//     return result;
// }

// function canPartition(nums: number[]): boolean {
//     let total = nums.reduce((acc, num) => acc + num);
//     // If total is odd, we can't partiition.
//     if (total % 2 === 1) return false;
//     const target = total / 2;

//     // Feel like we can refactor with cache.push(new Array(target).fill(null));
//     const cache: (boolean | null)[][] = [];
//     for (let row = 0; row < nums.length; row++) {
//         cache.push(new Array(target + 1).fill(null));
//     }

//     return rec(nums, cache, target);
// };

function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((cur, acc) => cur += acc, 0);
    const target = sum / 2;
    if (!Number.isInteger(target)) return false;

    const arr = new Array(target).fill(false);
    arr[0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            if (arr[j - nums[i]] === true) {
                if (j === target) return true;
                arr[j] = true;
            }
        }
    }
    return false;
};
