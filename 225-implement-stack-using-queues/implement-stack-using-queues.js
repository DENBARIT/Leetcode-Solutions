
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // 1. Push the new element to the back of the queue
    this.queue.push(x);
    
    // 2. Rotate the queue so the newest element comes to the front
    let size = this.queue.length;
    for (let i = 0; i < size - 1; i++) {
        this.queue.push(this.queue.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // Since the stack top is always at the front, just dequeue it
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // Peek at the front element of the queue
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};
