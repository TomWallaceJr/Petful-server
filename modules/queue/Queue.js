// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Q constructor inital data set to null
class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    // Insertion operation limited to one space.... the end of the Q
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    // We only remove from one place in the q (the beginning)
    // if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (!this.first === null) {
      return null;
    }
    return this.first.next;
  }


  all() {
    // Return all items in the queue.
    // puts each item from Q into an array one by one and returns array
    let arr = [];
    let node = queue.first;
    arr.push(node.value);
    node = node.next;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

module.exports = Queue
