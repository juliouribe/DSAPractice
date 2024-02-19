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

const explore = (grid, row, col) => {
    // off map
    if (offMap(grid, row, col)) {
        return;
    }
    // water tile
    if (grid[row][col] === 'W') {
        return;
    }
    if (grid[row][col] === 'L') {
        grid[row][col] = 'W';
    }
    for (const [x, y] of dirs) {
        explore(grid, row + x, col + y);
    }
    return;
}

const islandCount = (grid) => {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 'L') {
                explore(grid, row, col);
                count++;
            }
        }
    }
    return count;
};

module.exports = {
    islandCount,
};
