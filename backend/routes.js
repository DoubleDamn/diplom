const express = require('express');
const router = express.Router();

const countries = require('./Schema');
const users = require('./SchemaUser');

router.get('/users', (req, res) => {
  users.find().then(users => res.json(users));
});

router.get('/countries', (req, res) => {
  const limit = req.query;
  countries.find().then(countries => {
    res.json(countries);
  });
});

module.exports = router;

// //Add Task
// router.post('/', (req, res) => {
//   const newCountry = new Country({
//     country: req.body.task
//   });
//   newCountry.save().then(item => res.json(item));
// });

//Delete Task
// router.delete('/:id', (req, res) => {
//   Country.findById(req.params.id).then(item => item.remove().then(() => res.json({ success: true })));
// });

// //Update Task
// router.put('/:id', (req, res) => {
//   country.findById(req.params.id)
//     .then(item => {
//       item.task = req.body.task;
//       item.save().then(item => res.json(item));
//     })
//     .catch(err => res.status(404).json({ success: false }));
// });

// router.get('/travell', function(req, res) {
// //   const db = req.app.locals.db;

//   db.collection('country')
//     .find({})
//     .toArray(function(err, travell) {
//       if (err) return console.log(err);
//       res.send(travell);
//     });
// });

// router.get('/users', function(req, res) {
// //   const db = req.app.locals.db;

//   db.collection('users')
//     .find({})
//     .toArray(function(err, users) {
//       if (err) return console.log(err);
//       res.send(users);
//     });
