const fib = (n, memo = {}) => {
    if (n < 0) return 0;
    if (n === 1) return 1;
    if (n in memo) return memo[n];

    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
    return memo[n]
};

module.exports = {
    fib,
};
