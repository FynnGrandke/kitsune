'use strict';

const mongoose = require('mongoose');
const Entries = mongoose.model('Entries');

exports.list_all_entries = function(req, res) {
  Entries.find({}, (err, entry) => {
    if (err)
      res.send(err);
    res.json(entry);
  });
};

exports.create_an_entry = function(req, res) {
  console.log('POST', req, res);
  const new_entry = new Entries(req.body);
  new_entry.save((err, entry) => {
    if (err)
      res.send(err);
    res.json(entry);
  });
};
