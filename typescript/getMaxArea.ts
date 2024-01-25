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

function getArea(grid: number[][], seen: boolean[][], row: number, col: number, area: number): number {
    // Edges of matrix
    if (offBoard(grid, row, col)) {
        return area;
    }
    // Seen
    if (seen[row][col]) {
        return area;
    }
    seen[row][col] = true;
    // Found a water tile
    if (grid[row][col] === 0) {
        return area;
    }
    area++;
    for (let dir of dirs) {
        const [x, y] = dir;
        area = Math.max(getArea(grid, seen, row + y, col + x, area), area);
    }
    return area;
}

function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0;
    const seen: boolean[][] = [];
    for (let i = 0; i < grid.length; i++) {
        seen.push(new Array(grid[0].length).fill(false));
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const area = getArea(grid, seen, row, col, 0);
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    return maxArea;
};
