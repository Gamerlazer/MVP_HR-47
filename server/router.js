var express = require('express');
var router = express.Router();
var controller = require('./controller');


// define the different endpoints

router.get('/login/login', function (req, res) {
  console.log('/api/login');
  res.send('hi');
});


router.post('/login', controller.test);


// router.post('/login', function (req, res) {
//   console.log('router, in the post')
//   res.send();
// });

module.exports = router;