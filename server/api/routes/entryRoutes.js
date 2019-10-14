'use strict';
module.exports = function(app) {
  const entries = require('../controller/entryController');

  app.route('/entries')
    .get(entries.get_random_entry)
    .post(entries.create_an_entry)
    .put(entries.add_reply);
};
