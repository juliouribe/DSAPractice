const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function offBoard(grid: string[][], row: number, col: number): boolean {
    if ((row < 0 || row >= grid.length) || (col < 0 || col >= grid[0].length)) {
        return true;
    }
    return false;
}

function dfs(grid: string[][], seen: boolean[][], row: number, col: number): boolean {
    // Check to see if on the board.
    if (offBoard(grid, row, col)) {
        return false;
    }
    // Check if already visited
    if (seen[row][col]) {
        return false;
    }
    seen[row][col] = true;
    // Check if land or water
    if (grid[row][col] === '0') {
        return false;
    }
    for (let dir of dirs) {
        const [x, y] = dir
        dfs(grid, seen, row + y, col + x)
    }

    return true;
}

function numIslands(grid: string[][]): number {
    let count = 0;
    let seen: boolean[][] = [];
    for (let i = 0; i < grid.length; i++) {
        seen.push(new Array(grid[0].length).fill(false));
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (dfs(grid, seen, row, col)) {
                count++;
            }
        }
    }
    return count;
};
