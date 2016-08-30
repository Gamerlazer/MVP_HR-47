var express = require('express');
var router = express.Router();
var controller = require('./controller');


router.post('/signup', controller.signup.post);

router.post('/login', controller.login.post);

router.post('/search', controller.search.post);

router.get('/favorites', controller.favorites.get);

router.get('/yelpSearch', controller.yelp.get);

module.exports = router;