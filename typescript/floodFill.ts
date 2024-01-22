const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function fill(image, row, col, startColor, targetColor): number[][] {
    // If we reach the edge of the board we'll return.
    if ((row < 0 || row >= image[0].length) || (col < 0 || col >= image.length)) {
        return image;
    }
    if (image[row][col] === startColor && image[row][col] !== targetColor) {
        image[row][col] = targetColor;
        for (let i = 0; i < dirs.length; i++) {
            const [x, y] = dirs[i];
            fill(image, row + y, col + x, startColor, targetColor)
        }
    }
    return image;
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image.length === 0) {
        return image;
    }
    const startColor = image[sr][sc]
    // If the start is already the color, then we can return early.
    if (startColor === color) {
        return image;
    }

    return fill(image, sr, sc, startColor, color);
};
