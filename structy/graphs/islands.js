const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

const offMap = (grid, row, col) => {
    if ((row < 0 || row >= grid.length) || (col < 0 || col >= grid[0].length)) {
        return true;
    }
    return false;
}

const explore = (grid, row, col, seen) => {
    // Off map
    if (offMap(grid, row, col)) {
        return;
    }
    // Already seen
    if (seen[row][col]) {
        return;
    }
    seen[row][col] = true;
    // Water tile
    if (grid[row][col] === 'W') {
        return;
    }
    for (const [x, y] of dirs) {
        explore(grid, row + x, col + y, seen);
    }
    return;
}

const islandCount = (grid) => {
    /*
    DFS is great for this. Once we find a piece of land,
    we can increment our count and start a DFS search. The search
    is over when we can only hit edges, visited spots, or water tiles.
    */
    const m = grid.length;
    const n = grid[0].length;
    const seen = Array.from(new Array(m), () => (new Array(n).fill(false)));
    let count = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const tile = grid[row][col];
            if (seen[row][col]) {
                continue;
            }
            if (tile === 'L') {
                count++;
                explore(grid, row, col, seen);
            }
        }
    }
    return count;
};

module.exports = {
    islandCount,
};
