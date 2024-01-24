function majorityElement(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    const hash: { [key: number]: number } = {};
    const majority = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in hash) {
            hash[num]++;
            if (hash[num] > majority) {
                return num;
            }
        } else {
            hash[num] = 1;
        }
    }
};

// function majorityElement(nums: number[]): number {
//     const n = nums.length;
//     const half = Math.floor(n / 2);

//     let map = new Map();
//     for (let num of nums) {
//         let count = map.get(num) || 0;
//         map.set(num, count + 1);
//         if (count + 1 > half) {
//             return num;
//         }
//     }

//     return -1;
// }
