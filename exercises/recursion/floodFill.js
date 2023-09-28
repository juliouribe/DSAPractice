/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// Beginning with a specific cell, if the value is equal to 1, we change it to 2 and then do the same
// for all cells 4-directionally connect to that cell.
// Keep going until we hit edges, are surrounded by 0's, or can only hit previously visited cells.

// These are the 4 directions we can move.
const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1]
]
const fill = function(image, sr, sc, targetColor, startColor) {
  if (sr >= image[0].length || sr < 0 || sc >= image.length || sc < 0) {
      return image
  }

  const curr = image[sr][sc];
  if (curr === startColor && curr !== targetColor) {
      image[sr][sc] = targetColor;
      for (dir of dirs) {
          const [x, y] = dir;
          fill(image, sr+x, sc+y, targetColor, startColor);
      }
  }
  return image;
}


var floodFill = function(image, sr, sc, color) {
  const startColor = image[sr][sc];
  if (startColor === color) return image;
  return fill(image, sr, sc, color, startColor);
};
