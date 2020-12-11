// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
  }

  enqueue(data) {
    // Add some data to the queue.
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
  }

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }
}

module.exports = Queue
