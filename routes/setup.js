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
    clientID: '604279669950-9uqk7ce80mopbps7f0jnith9rh6vhtqv.apps.googleusercontent.com',
    clientSecret: '8j7IvO55t3YhQKCTmYwaTpkH',
    callbackURL: '/callback'
},
    function (accessToken, refreshToken, profile, done) {
        User.create({ googleId: profile.id, name: profile.displayName }, function (err, user) {
            return done(err, user);
        });
    }
));