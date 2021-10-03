const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  guild: String,
  user: String,
  razon: String
});

module.exports = mongoose.model("afk", Schema)