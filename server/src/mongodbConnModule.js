var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://brandonvanseeters:lLSEPiXvrjXg95@ds227654.mlab.com:27654/discomposure');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}