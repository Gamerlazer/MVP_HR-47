var db = require('./db/config');
var jwt = require('./lib/utiliy');

var controller = {
  login: {
    post: function (req, res) {
      db.User.create({username: req.body.username, password: req.body.password}).then(function (user) {
        user.token = 'test';
        console.log(user);
        res.send(user);
      });
    }
  },
  favorite: {
    post: function (req, res) {
      console.log(req, 'REQUEST'); 
      res.send('favorite post');
    }
  }
};

module.exports = controller;