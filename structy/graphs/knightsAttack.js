const knightAttack = (n, kr, kc, pr, pc) => {
    const queue = [[kr, kc, 0]];
    const visited = new Set();
    visited.add(kr + ',' + kc)

    while (queue.length) {
        const [row, col, step] = queue.shift();
        if (row === pr && col === pc) {
            return step;
        }
        const neighbors = getKnightPositions(n, row, col);
        for (let neighbor of neighbors) {
            const [neighborRow, neighborCol] = neighbor
            const nKey = neighborRow + ',' + neighborCol;
            if (!visited.has(nKey)) {
                queue.push([neighborRow, neighborCol, step + 1])
                visited.add(nKey)
            }
        }
    }
    return null;
};

const getKnightPositions = (n, kr, kc) => {
    const positions = [
        [kr + 2, kc + 1],
        [kr - 2, kc + 1],
        [kr + 2, kc - 1],
        [kr - 2, kc - 1],
        [kr + 1, kc + 2],
        [kr - 1, kc + 2],
        [kr + 1, kc - 2],
        [kr - 1, kc - 2]
    ]
    const validPositions = [];
    for (let pos of positions) {
        const [row, col] = pos;
        if (row >= 0 && row < n && col >= 0 && col < n) {
            validPositions.push(pos);
        }
    }
    return validPositions;
}

module.exports = {
    knightAttack,
};
