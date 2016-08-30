var db = require('./db/config');
var jwt = require('./lib/jwt');
var util = require('./lib/utiliy');

var controller = {
  signup: {
    post: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      db.User.findOne({usename: username}).then(function(user) {
        if (user) {
          res.send({existingUser: true});
        } else {
          db.User.create({username: req.body.username, password: req.body.password}).then(function (user) {
            var token = jwt.encode(user);
            res.send({token: token});
          });
        }
      });
    } 
  },
  login: {
    post: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      db.User.findOne({where: {username: username, password: password}}).then(function(user) {
        if (!user) {
          console.log('USERNAME NOT FOUND <-------------- Login');
          res.send({existingUser: false});
        } else {
          console.log('PASSWORD & USERNAME MATCH <-------------- login');
          var token = jwt.encode(user);
          res.send({token: token});
        }
      });
    }
  },
  search: {
    post: function (req, res) {
      // var bizName = req.body.bizName;
      // var starRating = req.body.starRating;
      // var location = req.body.location;
      console.log(req.body, '<---- BOYD')
      var newBiz = {
        bizName: req.body.bizName,
        bizRating: req.body.bizRating,
        bizLocation: req.body.bizLocation,
        bizImage: req.body.bizImage,
        bizCategories: req.body.bizCategories
      };

      var username = util.getUserObj(req).username;

      db.User.findOne({where: {username: username}})
        .then(function(user) {
          if ( user ) {
            db.Favorite.create(newBiz).then(function(favorite) {
              user.addFavorites([favorite]).then( function(createdAssoc) {
                console.log('Favorite added');
              }); 
            });
          }
        });
      res.send();
    }
  },
  favorites: {
    get: function(req, res) {
      // var user = util.getUserObj(req);
      db.User.findOne({username: 'Julie'}).then(function(user) {
        user.getFavorites().then(function (favorites) {
          console.log(favorites, 'MY FAVORITES');
          res.send(favorites);
        });
      });
    }
  }
};




/*
      bizName: business.name,
      starRating: business.rating,
      location: business.location.display_address


*/



/*

     db.User.findOne({where: {username: username, password: password}, attributes: ['id']}).then(function(user) {
        console.log(user.dataValues, 'I FOUND YOU =================================');
      });


*/
module.exports = controller;