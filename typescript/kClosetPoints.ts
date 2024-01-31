class Heap {
    public length: number;
    private data: number[][];
    private compare: (t1: number[], t2: number[]) => boolean;

    constructor(compare: (t1: number[], t2: number[]) => boolean) {
        this.length = 0;
        this.data = [];
        this.compare = compare;
    }
    insert(value: number[]): void {
        /*
        Insert the new value at the end of the array list using length. Then heapifyUp.
        Increment count.
        */
        this.length++;
        this.data.push(value);
        this.heapifyUp(this.length - 1);
    }
    poll() {
        // Also known as poll, pop, or whatever. Remove the smallest value which is the head.
        if (this.length === 0) {
            throw new Error("Heap is empty!");
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;

    }
    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);
        if (idx >= this.length || leftIdx >= this.length) {
            return
        }
        const value = this.data[idx];
        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        // Farther and larger are interchangeable here.
        // If right value is farther than left and parent is farther than left, swap with left.
        if (this.compare(rightValue, leftValue) && this.compare(value, leftValue)) {
            this.swap(idx, leftIdx);
            this.heapifyDown(leftIdx);
            // If left value is farther than left and parent is farther than the right, swap with right.
        } else if (this.compare(leftValue, rightValue) && this.compare(value, rightValue)) {
            this.swap(idx, rightIdx);
            this.heapifyDown(rightIdx);
        }
    }
    private heapifyUp(idx: number): void {
        // If we're at the root we're done.
        if (idx === 0) {
            return;
        }
        // Otherwise parent idx must exist and we can check if we need to swap.
        const parentIdx = this.parent(idx);
        // If parent is farther than current, then swap.
        if (this.compare(this.data[parentIdx], this.data[idx])) {
            this.swap(idx, parentIdx);
            this.heapifyUp(parentIdx);
        }
    }
    private swap(a: number, b: number): void {
        const temp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = temp;
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        // 2i + 1.
        return (2 * idx + 1);
    }
    private rightChild(idx: number): number {
        // 2i + 2.
        return (2 * idx + 2);
    }
}

function distance(point: number[]): number {
    return point[0] * point[0] + point[1] * point[1];
}

const compare = (p1: number[], p2: number[]) => {
    // Is the first point farther away.
    return distance(p1) > distance(p2);
}
function kClosest(points: number[][], k: number): number[][] {
    /*
    We can use a minHeap to insert the points using the calculated distance.
    */
    const result: number[][] = [];
    const minHeap = new Heap(compare);
    for (const point of points) {
        minHeap.insert(point);
    }
    while (result.length < k) {
        result.push(minHeap.poll());
    }
    return result;
};
