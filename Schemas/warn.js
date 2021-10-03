const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  guild: String,
  user: String,
  warnings: Array
});

module.exports = mongoose.model("warn", Schema)