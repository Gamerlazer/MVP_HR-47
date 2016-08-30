var db = require('./db/config');

var controller = {
  test: function (req, res) {
    console.log('Got to the controller', req.body.username, req.body.password);
    // return db.User;
    db.User.create({username: req.body.username, password: req.body.password})
    res.send('Got to the controller');
  }
};

module.exports = controller;