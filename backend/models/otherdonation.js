const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  item: String,
  itemName: String,
  quantity: Number,
  name: String,
  phone: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("OtherDonation", schema);