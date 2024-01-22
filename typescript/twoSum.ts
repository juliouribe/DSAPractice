function twoSum(nums: number[], target: number): number[] {
	const seen: { [key: number]: number } = {};
	for (let i = 0; i < nums.length; ++i) {
		const value = nums[i];
		const remainder = target - value;
		if (remainder in seen) {
			return [seen[remainder], i];
		}
		seen[value] = i;
	}
	return [];
};
