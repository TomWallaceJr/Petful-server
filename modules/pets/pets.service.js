const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

// initializes new cats and dogs Queues
const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

// fills Queues with data from store
store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  // Return the pets next in line to be adopted.
  getNext(type) {
    if (type === 'cat') {
      return pets.cats.show();
    }
    if (type === 'dog') {
      return pets.dogs.show();
    }
    // if neither type entered gets next dog and cat
    // / puts them in object / returns object
    let nextUp = {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    }
    return nextUp;
  },

  // returns all pets
  getAll() {
    let petsList = {
      dogs: pets.dogs.all(),
      cats: pets.cats.all()
    }
    return petsList;
  },

  dequeue(type) {
    if (type === 'cat') {
      pets.cats.dequeue();
      return { message: 'Success' };
    }
    if (type === 'dog') {
      pets.dogs.dequeue();
      return { message: 'Success' };
    }
    throw error('Something went wrong please try again');
  }
}
