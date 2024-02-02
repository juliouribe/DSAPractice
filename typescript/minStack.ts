class MinStack {
    private data: number[];
    private length: number;
    private minValsStack: number[];

    constructor() {
        this.data = [];
        this.length = 0;
        this.minValsStack = [];
    }

    push(val: number): void {
        if (this.length === 0) {
            this.minValsStack.push(val);
        } else if (val <= this.minValsStack[this.minValsStack.length - 1]) {
            this.minValsStack.push(val);
        }
        this.data.push(val);
        this.length++;
    }

    pop(): void {
        if (this.length === 0) {
            return;
        }
        const latest = this.data.pop();
        if (latest === this.minValsStack[this.minValsStack.length - 1]) {
            this.minValsStack.pop();
        }
        this.length--;
    }

    top(): number {
        return this.data[this.length - 1];
    }

    getMin(): number {
        return this.minValsStack[this.minValsStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
