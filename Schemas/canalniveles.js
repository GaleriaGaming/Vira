const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  guild : String,
  channel : String
});

module.exports = mongoose.model("canalniveles", Schema)