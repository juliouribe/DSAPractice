// We can use two stacks to create with O(1) push and pop methods.
// Arrays are good at push and pop. However we need FIFO. Arrays are not good at adding to or removing from the front.
// It would require O(n) time to reassign every index after the first every time we retrieved a value.

// Solution is to use two stacks.
// Whenenver we add to the queue, we add to the inbox. Then when we want to retrieve from the queue, if the outbound
// is empty, we empty all of the items from inbox using pop from inbox and push to outbound. This inverts our
// stack so now the first items are at the top of the outbound. Now we can pop from the outbout and its like getting items
// from the front of the queue but without re-indexing things.

// When the outboud box is empty, we invert again. We keep adding to the inbox and only pull from the outboud.
var MyQueue = function () {
  this.inbox = []
  this.outbound = []
};

/**
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  this.inbox.push(x)
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
  // Pop from outboud if we have any items.
  if (this.outbound.length === 0) {
    while (this.inbox.length > 0) {
      this.outbound.push(this.inbox.pop());
    }
  }
  return this.outbound.pop()
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
  if (this.outbound.length > 0) {
    return this.outbound[this.outboud.length - 1];
  } else {
    return this.inbox[0]
  }
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return this.inbox.length === 0 && this.outbound.length === 0
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
