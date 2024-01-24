function containsDuplicate(nums: number[]): boolean {
    const hash = new Map();
    for (let num of nums) {
        const seen = hash.get(num);
        if (seen) {
            return true;
        }
        hash.set(num, true);
    }
    return false;
};
