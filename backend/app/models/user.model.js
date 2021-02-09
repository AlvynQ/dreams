const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    nom: String,
    prenom: String,
    genre: String,
    nationalite: String,
    tel: String,
    adresse: String,
    codePostal: String,
    pays: String,
  })
);

module.exports = User;
