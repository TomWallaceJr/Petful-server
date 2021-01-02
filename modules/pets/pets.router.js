const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()



router.delete('/api/removecat', json, (req, res) => {
  // Remove a pet from adoption.
  //People.dequeue();
  res.json(Pets.dequeue('cat'));
});

router.delete('/api/removedog', json, (req, res) => {
  // Remove a pet from adoption.
  // People.dequeue();
  res.json(Pets.dequeue('dog'));
});


router.get('/api/getallcats', (req, res) => {
  res.json(Pets.getAll('cats'));
});

router.get('/api/getalldogs', (req, res) => {
  res.json(Pets.getAll('dogs'));
});

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(Pets.getAll());
});

module.exports = router
