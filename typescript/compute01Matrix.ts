type qNode<T> = {
    value: T,
    next?: qNode<T>
}

class MyQueue<T> {
    public length: number;
    private head?: qNode<T>;
    private tail?: qNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as qNode<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return
        }
        this.tail.next = node;
        this.tail = node
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

const dirs = [
    [1, 0],     // up
    [-1, 0],    // down
    [0, 1],     // right
    [0, -1]     // left
]

interface Item {
    currRow: number;
    currCol: number;
    currLevel: number;
}

function createItem(row: number, col: number, level: number): Item {
    // An item is a starting point or neighbor that we'll insert into the queue.
    return { currRow: row, currCol: col, currLevel: level } as Item;
}

function offBoard(maxRows: number, maxCols: number, row: number, col: number): boolean {
    if ((row < 0 || row >= maxRows) || (col < 0 || col >= maxCols)) {
        return true;
    }
    return false;
}

function resetSeen(rows: number, cols: number): boolean[][] {
    return Array.from(new Array(rows), () => new Array(cols).fill(false));
}

function updateMatrix(mat: number[][]): number[][] {
    /*
    Create a 2D seen array, a distance 2D array.
    Iterate top left to bottom right. Check each cell using BFS
    If its a zero, distance is 0.
    If its not a zero, kick off bfs until we find a zero.
    Track each layer we go down until we find a zero and then return.
    Keep going until we've done the whole matrix.
    */
    console.time("Total time elapsed: ");
    const ROWS = mat.length;
    const COLS = mat[0].length;
    // Initialize dists with -1's
    const dists: number[][] = Array.from(new Array(ROWS), () => Array(COLS).fill(-1));
    // Iterate top left to bottom right.
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let queue = new MyQueue();
            let start = createItem(row, col, 0);
            let seen = resetSeen(ROWS, COLS);
            queue.enqueue(start);
            while (queue.length > 0) {
                let { currRow, currCol, currLevel } = queue.dequeue() as Item;
                const value = mat[currRow][currCol];
                // We found a zero, update the dists array and break.
                if (value === 0) {
                    dists[row][col] = currLevel;
                    break;
                    // Add the neighbors to the queue.
                } else {
                    for (let dir of dirs) {
                        const [x, y] = dir;
                        let newRow = currRow + y;
                        let newCol = currCol + x;
                        if (offBoard(ROWS, COLS, newRow, newCol)) continue;
                        if (seen[newRow][newCol]) continue;
                        queue.enqueue(createItem(newRow, newCol, currLevel + 1));
                        seen[newRow][newCol] = true;
                    }
                }
            }
        }
    }
    console.timeEnd("Total time elapsed");
    return dists;
};
