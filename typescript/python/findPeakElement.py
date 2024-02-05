class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
        for i, num in enumerate(nums):
            if i > 0 and i < len(nums)-1:
                if num > nums[i-1] and num > nums[i+1]:
                    return i
            elif i == 0:
                if num > nums[i +1]:
                    return i
            elif i == len(nums)-1:
                if num > nums[i-1]:
                    return i
