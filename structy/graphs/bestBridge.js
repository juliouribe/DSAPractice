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

const findIsland = (grid, row, col, seen, path) => {
    // if off map
    if (offMap(grid, row, col)) return path;
    // seen
    const coords = row + ',' + col;
    if (seen.has(coords)) return path;
    seen.add(coords);
    // water
    if (grid[row][col] === 'W') return path;
    path.push([row, col]);
    for (const [x, y] of dirs) {
        findIsland(grid, row + x, col + y, seen, path);
    }
    return path;
}

const buildBridge = (grid, islandTiles) => {
    const queue = [];
    const seen = new Set();
    // iterate over tiles. Add them to the queue, reassign grid value, and add
    // to seen.
    for (const tile of islandTiles) {
        const [row, col] = tile;
        grid[row][col] = 'W';
        queue.push([row, col, 0]);
        seen.add(row + ',' + col);
    }
    // Go over queue, add all neighbors and increment length.
    // If we find another land piece then we return that length.
    while (queue.length) {
        const [row, col, length] = queue.shift();
        if (grid[row][col] === 'L') {
            return length - 1;
        }
        // Add neighbors.
        for (const [x, y] of dirs) {
            const newRow = row + x;
            const newCol = col + y;
            const coords = newRow + ',' + newCol;
            if (!offMap(grid, newRow, newCol) && !seen.has(coords)) {
                queue.push([newRow, newCol, length + 1]);
                seen.add(coords);
            }
        }
    }
    return -1;
}

const bestBridge = (grid) => {
    /*
    Use DFS and BFS. Search across grid for a land tile, once you find a land tile
    use DFS to kick off a land search process for every connected tile on this piece of land.
    At every tile, do a BFS search to find a land tile after a water tile. Only add tiles
    where the first is a water and end when you find a land tile again.
    */
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // once we find a land tile,
            if (grid[row][col] === 'L') {
                const seen = new Set();
                // find the rest of the land tiles. Use recursion and return a path.
                const islandTiles = findIsland(grid, row, col, seen, []);
                return buildBridge(grid, islandTiles, seen);
            }
        }
    }
};

module.exports = {
    bestBridge,
};
