const mongoose = require("mongoose");

const Reservation = mongoose.model(
  "Reservation",
  new mongoose.Schema({
    username: String,
    voyageId: String,
  })
);

module.exports = Reservation;
