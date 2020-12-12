const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  getAll() {
    // Return all people in the queue.
    peopleList = [];
    node = people.first;
    while (node) {
      peopleList.push(node.value)
      node = node.next
    }
    return peopleList;
  },

  enqueue(person) {
    // Add a person to the queue.
  },

  dequeue() {
    // Remove a person from the queue.
  }
}
