function dfs(
    path: number[], sum: number, last: number, target: number,
    result: number[][], candidates: number[]): void {
    if (sum === target) {
        result.push(path)
    }
    for (let i = last; i < candidates.length; i++) {
        if (sum + candidates[i] <= target) {
            dfs(
                [...path, candidates[i]],
                sum + candidates[i],
                i,
                target,
                result,
                candidates
            )
        }
    }
}

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);
    dfs([], 0, 0, target, result, candidates);
    return result;
};
