var db = require('./db/config');

var controller = {
  login: {
    post: function (req, res) {
      console.log('Got to the controller', req.body.username, req.body.password);
      // return db.User;
      db.User.create({username: req.body.username, password: req.body.password}).then(function (user) {
        // can send back the user
        res.send(user);
      });
    }
  }
};

module.exports = controller;