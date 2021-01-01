const express = require('express')
const json = require('body-parser').json()
const jsonParser = express.json()

const People = require('./people.service')

const router = express.Router()

// Return all the people currently in the queue.
router
  .route('/')
  .get((req, res) => {
    res.json(People.getAll())
  })
  // Add a new person to the queue.
  .post(jsonParser, (req, res) => {
    const { name } = req.body;
    People.enqueue(name);
    res.status(201)
      .json(People.getAll())
  })
  // WILL ALWAYS REMOVE FROM TOP OF QUEUE!!
  .delete((req, res) => {
    //People.dequeue();
    res.json(People.dequeue());
  })


module.exports = router
