const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  return res.json(Pets.getAll())
})

// get next cat available
router.get('/api/cats', (req, res) => {
  return res.json(Pets.getNext('cat'))
})

// get next dog available
router.get('/api/dogs', (req, res) => {
  return res.json(Pets.getNext('dog'))
})
router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

router.delete('/api/cats', json, (req, res) => {
  // Remove a pet from adoption.
  return res.json(Pets.dequeue('cat'))
})

router.delete('/api/dogs', json, (req, res) => {
  // Remove a pet from adoption.
  return res.json(Pets.dequeue('dog'))
})

module.exports = router
