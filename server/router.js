var express = require('express');
var router = express.Router();
var controller = require('./controller');


// define the different endpoints


router.post('/signup', controller.signup.post);

router.post('/login', controller.login.post);

router.post('/search', controller.search.post);


// router.post('/login', function (req, res) {
//   console.log('router, in the post')
//   res.send();
// });

module.exports = router;