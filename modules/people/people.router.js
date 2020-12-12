const express = require('express')
const json = require('body-parser').json()
const jsonParser = express.json()

const People = require('./people.service')

const router = express.Router()

// Return all the people currently in the queue.
router
  .route('/')
  .get((req, res) => {
    return res.json(People.getAll())
  })
  // Add a new person to the queue.
  .post(jsonParser, (req, res) => {
    const name = req.body;
    const newPerson = name;
    if (!name) {
      return res.status(400).json({
        error: { message: 'Missing Name!' }
      })
    }

    People.enqueue(newPerson.name);
    return res.status(201)
      .json(newPerson)
      .end()
  })
  // WILL ALWAYS REMOVE FROM TOP OF QUEUE!!
  .delete((req, res) => {
    People.dequeue();
    return res.status(204)
      .end()
  })


module.exports = router
