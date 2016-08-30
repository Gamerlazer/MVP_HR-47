var db = require('./db/config');
var jwt = require('./lib/jwt');
var util = require('./lib/utiliy');
var yelp = require('./yelp');

var controller = {
  signup: {
    post: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      console.log(username, password, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
      db.User.findOne({where: {username: username}}).then(function(user) {
        if (user) {
          console.log('USER EXISTS <----------------', user);       
          res.send({existingUser: true});
        } else {
          db.User.create({username: req.body.username, password: req.body.password}).then(function (user) {
            console.log('user created! <----------------', user);
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
          res.send({existingUser: false});
        } else {
          var token = jwt.encode(user);
          res.send({token: token});
        }
      });
    }
  },
  search: {
    post: function (req, res) {
      console.log(req.body, '<---- BOYD');
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
      var user = util.getUserObj(req);
      if (!user) {
        res.send({existingUser: false});
      } else {
        db.User.findOne({where: {username: user.username}}).then(function(user) {
          if (!user) {
            res.send({existingUser: false});
          } else {
            console.log(user, '<----------- CURRENT USER');
            user.getFavorites().then(function (favorites) {
              res.send(favorites);
            });
          }
        });
      }
    }
  },
  yelp: {
    post: function(req, res) {
      console.log(req.body, '<<<<<------------- REQUEST ------');
      var term = req.body.term;
      var location = req.body.location;
      yelp.search({term: term, location: location})
        .then(function (searchResults) {
          console.log(searchResults, 'SEARCH RESULT');
          res.send(searchResults);
        })
        .catch(function (error) {
          console.error(error);
        });

    /*
    yelp.search({ term: 'food', location: 'Montreal' })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err);
    });
    */




    }
  }
};

module.exports = controller;