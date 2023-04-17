const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.end = null;
    this.head = null;
  }

  getUnderlyingList() {
    let result = null;
    if (this.end){
      result = new ListNode(this.end.value);
      let cur = this.end.prev;
      let end = result;
      while (cur){
        end.next = new ListNode(cur.value);
        end = end.next;
        cur = cur.prev;
      }
      return result;
    }
    else {
      return null;
    }
  }

  enqueue(value) {
    if (!this.head){
      this.head = new ListNode(value);
      this.end = this.head;
    }
    else {
      let node = new ListNode(value);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  dequeue() {
    if (!this.end){
      return null;
    }
    let v = this.end.value;
    this.end = this.end.prev;
    this.end.next = null;
    return v;
  }
}

module.exports = {
  Queue
};
