var express = require('express');
var router = express.Router();


// define the different endpoints

router.get('/login/login', function (req, res) {
  console.log('/api/login');
  res.send('hi');
});

router.post('/api/login', function (req, res) {
  res.send();
});

module.exports = router;