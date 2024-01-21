const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShipperSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  isActiveShipper: { type: Boolean }
});

const Shipper = mongoose.model("Shipper", ShipperSchema);
module.exports = Shipper;
