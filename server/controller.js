var db = require('./db/config');

var controller = {
  test: function (req, res) {
    console.log('Got to the controller');
    // return db.User;
    res.send('Got to the controller');
  }
};

module.exports = controller;