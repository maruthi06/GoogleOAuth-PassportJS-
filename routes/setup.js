var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./user');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('google', new GoogleStrategy({
    clientID: 'YOUR_ID',
    clientSecret: 'YOUR_CLIENTSECRET',
    callbackURL: '/callback'
},
    function (accessToken, refreshToken, profile, done) {
        User.create({ googleId: profile.id, name: profile.displayName }, function (err, user) {
            return done(err, user);
        });
    }
));
