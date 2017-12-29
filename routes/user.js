var mongoose = require('mongoose');

var user = mongoose.Schema;

var userScheme = new user({
    name: String,
    googleId: String,
});

var dbURI = "mongodb://localhost:27017/mkm";
mongoose.connect(dbURI, { useMongoClient: true }, function (err) {
	if (err) throw err;
	console.log('connected');
}
);
mongoose.connection.on('connected', function () {
	console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
	console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
});


module.exports = mongoose.model('User', userScheme);
