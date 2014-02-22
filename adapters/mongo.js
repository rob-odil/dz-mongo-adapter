var mongoskin = require('mongoskin');

// DozerJS NeDB component
var mongo = function (table, config) {
  this.table = table;
  this.config = config;
  this.store = mongoskin.db(config.db.config.host, {
		username: config.db.config.user,
		password: config.db.config.pass,
		database: config.db.config.database,
		safe: false
	});
};

// Returns count of fields based on query
mongo.prototype.count = function (query, cb) {

};

// Returns entire contents of data store
mongo.prototype.all = function (cb) {

};

// Finds specific entry
mongo.prototype.find = function (query, cb) {

};

// Inserts new record, generates _id
mongo.prototype.insert = function (data, cb) {

};

// Updates existing record
mongo.prototype.update = function (query, data, cb) {

};

// Removes existing record
mongo.prototype.remove = function (query, cb) {

};

module.exports = mongo;