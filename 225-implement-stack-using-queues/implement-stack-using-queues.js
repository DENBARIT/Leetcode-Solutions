
var MyStack = function() {
    this.q1= [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
 let size=this.q1.length;
 this.q1.push(x);
 for(let i=0;i<size;i++){
this.q1.push(this.q1.shift());
 }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // Since the stack top is alwayts at the front, just dequeue it
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // Peek at the front element of the queue
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};
