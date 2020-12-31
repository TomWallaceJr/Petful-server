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
    // did it this long way and then realized its easier lol
    // let peopleList = [];
    // node = people.first;
    // while (node) {
    //   peopleList.push(node.value)
    //   node = node.next
    // }
    // return peopleList;

    return people.all(people)
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
  },

  dequeue() {
    // Remove a person from the queue.
    // WILL ALWAYS REMOVE FROM TOP OF QUEUE!!
    people.dequeue();
    return people.all(people);
  }
}
