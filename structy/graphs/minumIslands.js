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

const explore = (grid, row, col, seen, size) => {
    // Off map
    if (offMap(grid, row, col)) {
        return size;
    }
    // Already seen
    if (seen[row][col]) {
        return size;
    }
    seen[row][col] = true;
    // Water tile
    if (grid[row][col] === 'W') {
        return size;
    }
    for (const [x, y] of dirs) {
        size = explore(grid, row + x, col + y, seen, size);
    }
    return size + 1;
}

const minimumIsland = (grid) => {
    /*
  DFS is great for this. Once we find a piece of land,
  we kick off DFS with a fresh island count variable for each island. The search
  is over when we can only hit edges, visited spots, or water tiles.
  */
    const m = grid.length;
    const n = grid[0].length;
    const seen = Array.from(new Array(m), () => (new Array(n).fill(false)));
    let min = Infinity;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const tile = grid[row][col];
            if (seen[row][col]) {
                continue;
            }
            if (tile === 'L') {
                const size = explore(grid, row, col, seen, 0);
                if (size < min) {
                    min = size;
                }
            }
        }
    }
    return min;
};

module.exports = {
    minimumIsland,
};
