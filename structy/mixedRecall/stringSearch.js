const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

const findWord = (grid, word, row, col, pos) => {
    // off map
    if ((row < 0 || row >= grid.length) || (col < 0 || col >= grid[0].length)) {
        return false;
    }
    // found the end of the word
    if (word.length === pos) {
        return true;
    }
    // Not the letter we're looking for.
    if (grid[row][col] !== word[pos]) {
        return false;
    }
    const temp = grid[row][col];
    grid[row][col] = '_'
    for (const [x, y] of dirs) {
        if (findWord(grid, word, row + x, col + y, pos + 1)) {
            return true;
        }
    }
    grid[row][col] = temp;
    return false;
}

const stringSearch = (grid, s) => {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (findWord(grid, s, row, col, 1)) {
                return true;
            }
        }
    }
    return false;
};

module.exports = {
    stringSearch,
};
