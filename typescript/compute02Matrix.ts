const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

type myNode<T> = {
    row: T,
    col: T,
    level: T,
}

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

        // This is a reference to the node that is currently the tail. We point it
        // towards the new node we just made.
        this.tail.next = node;
        // Now we update the pointer that is tracking the tail to our new node.
        this.tail = node
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        // can optionally clear out the head.next
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

function createNode(row: number, col: number, level: number): myNode<number> {
    return { row: row, col: col, level: level } as myNode<number>;
}

function offBoard(
    maxRows: number, maxCols: number, row: number, col: number
): boolean {
    if ((row < 0 || row >= maxRows) || (col < 0 || col >= maxCols)) {
        return true;
    }
    return false;
}

function resetSeen(rows: number, cols: number): boolean[][] {
    const seen: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
        seen.push(new Array(cols).fill(false));
    }
    return seen;
}

interface Neighbor {
    currRow: number;
    currCol: number;
    currLevel: number;
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
    if (mat.length == 0) {
        return [];
    }
    const ROWS = mat.length;
    const COLS = mat[0].length;
    const dists: number[][] = [];
    // Initialize seen and dists arrays.
    for (let i = 0; i < ROWS; i++) {
        dists.push(new Array(COLS).fill(-1));  // -1 just so its not a zero
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let queue = new MyQueue();
            // let start = createNode(row, col, 0);
            let start: Neighbor = {
                currRow: row,
                currCol: col,
                currLevel: 0,
            }
            let seen = resetSeen(ROWS, COLS);
            queue.enqueue(start);
            while (queue.length > 0) {
                let { currRow, currCol, currLevel } = queue.dequeue() as Neighbor;
                // let curr = queue.dequeue() as myNode<number>;
                // let currRow = curr.row;
                // let currCol = curr.col;
                // let currLevel = curr.level;
                const value = mat[currRow][currCol];
                if (value === 0) {
                    // We found a zero. clear out the queue and break.
                    dists[row][col] = currLevel;
                    queue = new MyQueue();
                    break;
                } else {
                    // Add the neighbors to the stack.
                    for (let dir of dirs) {
                        const [x, y] = dir;
                        let newRow = currRow + y;
                        let newCol = currCol + x;
                        // let newLevel = currLevel + 1;
                        if (offBoard(ROWS, COLS, newRow, newCol)) {
                            continue;
                        }
                        if (seen[newRow][newCol]) {
                            continue;
                        }
                        // let adj = createNode(newRow, newCol, newLevel);
                        let adj: Neighbor = {
                            currRow: newRow,
                            currCol: newCol,
                            currLevel: currLevel + 1
                        }
                        queue.enqueue(adj);
                        seen[newRow][newCol] = true;
                    }
                }
            }
        }
    }

    return dists;
};
