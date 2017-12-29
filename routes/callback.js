var express = require('express');
var router = express.Router();
var passport = require('passport');
var setup = require('./setup');

router.get('/', passport.authenticate('google'), function (req, res) {
    res.send('reached your destination');
}
);

module.exports = router;