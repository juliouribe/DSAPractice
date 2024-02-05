const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function offBoard(grid: number[][], row: number, col: number): boolean {
    if ((row < 0 || row >= grid.length) || (col < 0 || col >= grid[0].length)) {
        return true;
    }
    return false;
}

function orangesRotting(grid: number[][]): number {
    let stack: number[][] = [];
    let freshOranges = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 2) {
                stack.push([row, col]);
            } else if (grid[row][col] === 1) {
                freshOranges++;
            }
        }
    }
    let days = 0;
    while (stack.length) {
        const newStack: number[][] = [];
        // Double loop so we can empty out per level.
        // Then set the stack to the new stack which is the children.
        while (stack.length) {
            let [row, col] = stack.pop() as number[];
            for (const [x, y] of dirs) {
                const newRow = row + y;
                const newCol = col + x;
                // Skip adding neighbor if we're off the board or the cell is empty.
                if (offBoard(grid, newRow, newCol)) {
                    continue;
                }
                if (grid[newRow][newCol] === 1) {
                    newStack.push([newRow, newCol]);
                    grid[newRow][newCol] = 2;
                    freshOranges--;
                }
            }
        }
        if (newStack.length) {
            days++;
        }
        stack = newStack;
    }
    if (freshOranges > 0) {
        return -1;
    }
    return days;
};
