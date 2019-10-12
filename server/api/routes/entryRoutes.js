'use strict';
module.exports = function(app) {
  const entries = require('../controller/entryController');

  app.route('/entries')
    .get(entries.list_all_entries)
    .post(entries.create_an_entry);
};
