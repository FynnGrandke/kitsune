'use strict';

// Controller defining the responses

const mongoose = require('mongoose');
const Entries = mongoose.model('Entries');

exports.get_random_entry = (req, res) => {
  Entries.find({}, (err, entry) => {
    if (err) {
      res.send(err);
    }    
    res.json(entry[Math.floor(Math.random() * entry.length)]);
  });
};

exports.create_an_entry = (req, res) => {
  const new_entry = new Entries(req.body);
  new_entry.save((err, entry) => {
    if (err) {
      res.send(err);
    }
    res.json(entry);
  });
};

exports.add_reply = (req, res) => {
  const new_entry = new Entries(req.body);
  new_entry.save((err, entry) => {
    if (err) {
      res.send(err);
    }
    res.json(entry);
  });
};
