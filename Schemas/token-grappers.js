const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    guild: String,
    activate: String
});

module.exports = mongoose.model("token-grappers", Schema)