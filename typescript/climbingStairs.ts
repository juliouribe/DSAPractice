function climbStairs(n: number, memo = {}): number {
    if (n in memo) return memo[n];

    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};
