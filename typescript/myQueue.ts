class MyQueue {
    private inbox: number[];
    private outbox: number[];
    public length: number;

    constructor() {
        this.inbox = [];
        this.outbox = [];
        this.length = 0;
    }

    push(x: number): void {
        this.length++;
        this.inbox.push(x);
    }

    pop(): number | undefined {
        if (this.length == 0) {
            return;
        }
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                const item = this.inbox.pop() as number;
                this.outbox.push(item);
            }
        }
        this.length--;
        return this.outbox.pop();
    }

    peek(): number {
        return this.inbox[0];
    }

    empty(): boolean {
        return this.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
