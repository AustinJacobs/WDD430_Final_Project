const mongoose = require("mongoose");

const houseSchema = mongoose.Schema({
  id: { type: String, required: true },
  price: { type: String, required: true },
  listDate: { type: String },
  address: { type: String },
  residenceType: { type: String },
  yearBuilt: { type: String },
  sqFeet: { type: String },
  pricePerSqFeet: { type: String },
  availability: { type: String },
  propertyDescription: { type: String },
  lengthTimeListed: { type: String },
  url: { type: String },
});

module.exports = mongoose.model("House", houseSchema);
