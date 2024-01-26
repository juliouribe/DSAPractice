const dirs = [
    [1, 0], // up
    [1, 1], // up right
    [0, 1], // right
    [-1, 1], // right down
    [-1, 0], // down
    [-1, -1], // down left
    [0, -1], // left
    [1, -1] // left up
]

type layer<T> = {
    row: T,
    col: T,
    level: T,
}

function shortestPathBinaryMatrix(grid: number[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) {
        return -1
    }
    const seen: boolean[][] = [];
    for (let i = 0; i < ROWS; i++) {
        seen.push(new Array(COLS).fill(false));
    }
    // 1. Initialize a queue with starting values.
    const queue: layer<number>[] = [{ row: 0, col: 0, level: 1 } as layer<number>];
    seen[0][0] = true;
    // 2. Pop current node from front of queue
    while (queue.length > 0) {
        // 3. Process current node
        let curr = queue.shift() as layer<number>;
        let row = curr.row;
        let col = curr.col;
        let level = curr.level;
        if (row === ROWS - 1 && col === COLS - 1) {
            return level;
        }
        // 4. push neighbors into queue if they are valid
        for (let dir of dirs) {
            const [x, y] = dir;
            let newRow = row + y;
            let newCol = col + x;
            let newLevel = level + 1;
            if ((newRow < 0 || newRow >= ROWS) || (newCol < 0 || newCol >= COLS)) {
                continue
            };
            if (grid[newRow][newCol] === 1) {
                continue
            };
            if (seen[newRow][newCol]) {
                continue
            };
            let newNode = { row: newRow, col: newCol, level: newLevel } as layer<number>;
            queue.push(newNode);
            seen[newRow][newCol] = true;
        }
        // 5. repeat steps 2-4 until queue is empty
    }

    return -1
};
