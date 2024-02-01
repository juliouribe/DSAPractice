function threeSum(nums: number[]): number[][] {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize an array to store the result
    let result: number[][] = [];

    // Iterate through the array
    for (let left = 0; left < nums.length - 2; left++) {
        // Skip duplicate values of nums[left]
        if (left > 0 && nums[left] === nums[left - 1]) {
            continue;
        }
        // Initialize two pointers, mid and right
        let mid = left + 1;
        let right = nums.length - 1;

        // Two-pointer approach to find triplets
        while (mid < right) {
            // Calculate the sum of the triplet
            const sum = nums[left] + nums[mid] + nums[right];

            // If the sum is zero, add the triplet to the result
            if (sum === 0) {
                result.push([nums[left], nums[mid], nums[right]]);

                // Skip duplicate values of nums[mid]
                while (mid < right && nums[mid] === nums[mid + 1]) {
                    mid++;
                }
                // // Skip duplicate values of nums[right]
                while (mid < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                // Move the pointers
                mid++;
                right--;
            } else if (sum < 0) {
                // If sum is less than zero, increment mid
                mid++;
            } else {
                // If sum is greater than zero, decrement right
                right--;
            }
        }
    }

    // Return the result array containing unique triplets that sum up to zero
    return result;
}
