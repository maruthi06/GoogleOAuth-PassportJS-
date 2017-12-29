var express = require('express');
var router = express.Router();
var passport = require('passport');
var setup = require('./setup');

router.get('/',
  passport.authenticate('google', { scope: ['profile'] }, function (req, res, next) {
    res.send('success');
  })
);


module.exports = router;