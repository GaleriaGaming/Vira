const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  message: String,
  suggest: String
});

module.exports = mongoose.model("sugerencia", Schema)