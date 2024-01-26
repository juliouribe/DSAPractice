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
    [0, 1],     // right
    [-1, 0],    // down
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

function onBoard(maxRows: number, maxCols: number, row: number, col: number): boolean {
    if ((row < 0 || row >= maxRows) || (col < 0 || col >= maxCols)) {
        return false;
    }
    return true;
}

function updateMatrix(mat: number[][]): number[][] {
    const ROWS = mat.length;
    const COLS = mat[0].length;
    // Create a distance 2D array filled with -1's and a queue.
    const dists: number[][] = Array.from(new Array(ROWS), () => Array(COLS).fill(-1));
    let queue = new MyQueue();
    // Iterate over all of the cells. Only add the zero's to the queue and set
    // their distances to 0.
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (mat[row][col] === 0) {
                dists[row][col] = 0;
                queue.enqueue(createItem(row, col, 0));
            }
        }
    }
    // Start dequeue'ing with the zero's first.
    while (queue.length > 0) {
        const { currRow, currCol, currLevel } = queue.dequeue() as Item;
        // Look at the neighboring cells.
        for (const [x, y] of dirs) {
            const newRow = currRow + y;
            const newCol = currCol + x;
            const newLevel = currLevel + 1;
            // If the neighbor is still -1, then we haven't calculated their distance.
            // These all originate from a 0 so as we incrementally flood fill out,
            // the value of currLevel will continue to increment since we'll keep
            // finding neighbors that are -1 (non-zeros). We won't accidentally
            // update a zero dists because we've already set those. That's how we track what we've seen.
            if (onBoard(ROWS, COLS, newRow, newCol) && dists[newRow][newCol] === -1) {
                dists[newRow][newCol] = newLevel;
                queue.enqueue(createItem(newRow, newCol, newLevel));
            }
        }
    }
    return dists;
};
