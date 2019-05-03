const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title : {type:String},
  director : {type:String},
  stars : {type:Array},
  image : {type:String},
  description : {type:String},
  showtimes : {type:Array}
})

module.exports = mongoose.model("Movies", MovieSchema);