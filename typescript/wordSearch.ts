const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function findWord(board: string[][], row: number, col: number, word: string, pos: number): boolean {
    // Off map?
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }
    // Board letter not equal to the next one
    if (board[row][col] !== word[pos]) {
        return false;
    }
    // We have found all of the letters
    if (board[row][col] === word[pos] && (word.length - 1) === pos) {
        return true;
    }
    // Recurse step
    const currChar = board[row][col];
    board[row][col] = '_';
    for (const [x, y] of dirs) {
        if (findWord(board, row + y, col + x, word, pos + 1)) {
            return true;
        }
    }
    board[row][col] = currChar;

    return false;
}

function exist(board: string[][], word: string): boolean {
    /*
    Iterate over the board, top left to bot right.
    Kick off DFS on the tile if it matches the first letter of the word.
    DFS will look at the next character and keep going if it continues to find matches.
    If we get to the end we return true.
    */
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                if (findWord(board, row, col, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};
