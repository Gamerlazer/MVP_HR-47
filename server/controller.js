var db = require('./db/config');
var jwt = require('./lib/utiliy');

var controller = {
  signup: {
    post: function (req, res) {
      console.log('sign up');
      db.User.create({username: req.body.username, password: req.body.password}).then(function (user) {
        var token = jwt.encode(user);
        // res.json({token: token});
        res.send({token: token});
      });
    } 
  },
  login: {
    post: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;

      // db.User.findAll({where: {username: username}}).then(function(user){
      //   console.log('I FOUND YOU', user);
      // });
      db.User.findOne({where: {username: username, password: password}}).then(function(user) {
        var token = jwt.encode(user);
        res.send({token: token});
      });


      // db.User.findOne({where: {username: req.body.username}}).then(function (user) {
      //   // console.log(user.dataValues.username, '<----USERFOUND');
      //   // user.token = jwt.encode(user);
      //   user.token = jwt.encode(user);
      //   // console.log(user.token, '<----ENCODED USER');
      //   // console.log(user.token, '<----ENCODED');
      //   // console.log(jwt.decode(user.token), '<----DECODED');
      //   // console.log(user.token, '<----DECODED');
      //   // console.log(user.token, '<----USER');
      //   // res.send(user);
      //   // res.json({user: user, token: token});
      // });
    }
  },
  search: {
    post: function (req, res) {
      var token = req.headers['myfavtoken-access-token'];
      var username = jwt.decode(token).username;
      db.findOne({where: {username: username}}).then(function(user) {
        console.log(user, '<---- found user');
        res.send('favorite post');
      });
    }
  }
};



/*

     db.User.findOne({where: {username: username, password: password}, attributes: ['id']}).then(function(user) {
        console.log(user.dataValues, 'I FOUND YOU =================================');
      });


*/
module.exports = controller;