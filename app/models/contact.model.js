const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);