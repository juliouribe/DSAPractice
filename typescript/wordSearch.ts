const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function dfs(
    board: string[][], word: string, pos: number,
    row: number, col: number): boolean {
    // Assume we found the starting letter. Search in 4 directions for remaining letters
    // Base Case
    if ((row < 0 || row >= board.length) || (col < 0 || col >= board[0].length)) {
        return false;
    }
    // Not the letter we want.
    if (board[row][col] !== word[pos]) {
        return false;
    }
    // found the last letter
    if ((board[row][col] === word[pos]) && ((word.length - 1) === pos)) {
        return true;
    }
    // Iterate over 4 dirs.
    for (let dir of dirs) {
        const [x, y] = dir;
        const prev = board[row][col];
        board[row][col] = '*';
        if (dfs(board, word, pos + 1, row + y, col + x)) {
            return true;
        }
        board[row][col] = prev;
    }
    return false;
}

function exist(board: string[][], word: string): boolean {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                if (dfs(board, word, 0, row, col)) {
                    return true;
                }
            }
        }
    }
    return false;
};
