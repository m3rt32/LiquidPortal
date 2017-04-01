// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var menuElementsSchema = new Schema({
  name: String,
  link: String
});

// the schema is useless so far
// we need to create a model using it
var MenuElements = mongoose.model('MenuElements', menuElementsSchema);

// make this available to our users in our Node applications
module.exports = MenuElements;