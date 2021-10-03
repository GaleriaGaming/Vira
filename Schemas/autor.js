const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  message: String,
  user: String
});

module.exports = mongoose.model("autor", Schema)