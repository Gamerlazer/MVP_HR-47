var db = require('./db/config');
var jwt = require('./lib/jwt');
var util = require('./lib/utiliy');
var yelp = require('./yelp');

var controller = {
  signup: {
    post: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      db.User.findOne({where: {username: username}}).then(function(user) {
        if (user) {    
          res.send({existingUser: true});
        } else {
          db.User.create({username: req.body.username, password: req.body.password}).then(function (user) {
            var token = jwt.encode({ 
              userId: user.dataValues.id,
              username: user.dataValues.username
            });
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
          var token = jwt.encode({ 
            userId: user.dataValues.id,
            username: user.dataValues.username
          });
          res.send({token: token});
        }
      });
    }
  },
  search: {
    post: function (req, res) {
      var newBiz = {
        bizName: req.body.bizName,
        bizRating: req.body.bizRating,
        bizLocation: req.body.bizLocation,
        bizImage: req.body.bizImage,
        bizCategories: req.body.bizCategories,
        bizYelpId: req.body.bizYelpId
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
          res.send(searchResults);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }
};

module.exports = controller;