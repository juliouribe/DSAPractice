class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for i in asteroids:
            # In the situation that i ast is heavier than previous stored asteroids
            # we destroy previous asteroids if they are positive and there is a negative large asteroid
            while stack and (stack[-1] >= 0 and i < 0) and abs(stack[-1]) < abs(i):
                stack.pop()
            # If stack is empty, last asteroid is negative and new is positive,
            # both are positive, or both are negative.
            if not (stack) or (stack[-1] < 0 and i >= 0) or (stack[-1] >= 0 and i >= 0) or (stack[-1] <= 0 and i <= 0):
                stack.append(i)
            elif (stack and abs(stack[-1]) == abs(i)):
                stack.pop()

        return stack
