var mongoskin = require('mongoskin');
var ObjectID = require("mongoskin").ObjectID

// DozerJS NeDB component
var mongo = function (table, config) {
  this.table = table;
  this.config = config;
  this.store = mongoskin.db(config.host, {
		username: config.user,
		password: config.pass,
		database: config.database,
		safe: false
	});
};

// Correctly formats ID values
mongo.prototype.formatQuery = function (query) {
  if (query.hasOwnProperty('_id')) {
    query._id = ObjectID.createFromHexString(query._id);
  }
  return query;
};

// Returns count of fields based on query
mongo.prototype.count = function (query, cb) {

};

// Returns entire contents of data store
mongo.prototype.all = function (cb) {
  var self = this;
  self.store.collection(self.table).find().toArray(function (err, data) {
		cb(err, data);
		self.store.close();
	});
};

// Finds specific entry
mongo.prototype.find = function (query, cb) {
  var self = this;
  query = self.formatQuery(query);
  console.log(query);
  self.store.collection(self.table).find(query).toArray(function (err, data) {
    cb(err, data);
    self.store.close();
  });
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