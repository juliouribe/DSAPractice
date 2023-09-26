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
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
]

const flood = function (image, sr, sc, color, startColor) {
  // Exit early if we're out of bounds.
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image.length) {
    return;
  }
  let curr = image[sr][sc];
  // If current cell has the same start color as when we started infecting, change the color.
  if (curr === startColor) {
    image[sr][sc] = color;
    // call floodFill on adjacent using loop
    for (let i = 0; i < dir.length; i++) {
      // Unpack directions and recursively call floodFill
      const [x, y] = dir[i];
      flood(image, sr + x, sc + y, color, startColor)
    }
  }
}

var floodFill = function (image, sr, sc, color) {
  const startColor = image[sr][sc];
  // Avoid infinite loop if colors are the same
  if (startColor === color) return image;
  flood(image, sr, sc, color, startColor)
  return image
};
