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

const addNeighbors = (grid, row, col, steps, queue, seen) => {
    for (const [x, y] of dirs) {
        const newRow = row + x;
        const newCol = col + y;
        const coords = newRow + ',' + newCol;
        if (!offMap(grid, newRow, newCol) && !(seen.has(coords)) && grid[newRow][newCol] !== 'X') {
            queue.push([newRow, newCol, steps + 1]);
            seen.add(coords);
        }
    }
}

const closestCarrot = (grid, startRow, startCol) => {
    /*
    Closest means we'll want to use BFS. However we have walls to deal with
    which means as we traverse nodes outwards we'll have to not add neighbors
    of nodes where the node is a wall.
    */
    const queue = [[startRow, startCol, 0]];
    const seen = new Set([startRow + ',' + startCol]);

    while (queue.length) {
        const [row, col, steps] = queue.shift();
        if (grid[row][col] === 'C') {
            return steps;
        }
        addNeighbors(grid, row, col, steps, queue, seen);
    }
    return -1;
};

module.exports = {
    closestCarrot,
};
