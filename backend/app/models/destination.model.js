const mongoose = require("mongoose");

const Destination = mongoose.model(
  "Destination",
  new mongoose.Schema({
    lieu: String,
    titre: String,
    prix: String,
    description: String,
    photo: String,
  })
);

module.exports = Destination;
