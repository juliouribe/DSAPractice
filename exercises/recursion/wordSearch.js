/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1]
]

var exist = function (board, word) {
  let result = false;
  const recSearch = function (idx, row, col) {
    if (!result) {
      // Off the board
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
        return;
      }
      // Not the letter we're looking for.
      if (board[row][col] != word[idx]) return;
      // We found all of the letters in our path.
      if (idx === word.length - 1) {
        result = true;
        return
      }
      // Once we've found/used a letter, take it out of play.
      board[row][col] = null;
      for (const [rDir, cDir] of dirs) {
        recSearch(idx + 1, row + rDir, col + cDir)
      }
      // If this isn't the optimal path, reset the letter in case we use it later.
      board[row][col] = word[idx]
    }
  }
  // Search for the first letter and then begin a recursive search for a path of letters.
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] == word[0]) {
        recSearch(0, row, col)
        if (result) return result;
      }
    }
  }
  return result
};
