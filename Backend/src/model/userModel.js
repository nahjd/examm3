const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    about: String,
    price: String,
    image: String,
  },
  {
    collection: "meal",
    timestamps: true,
  }
);

const User = mongoose.model("meal", UserSchema);

module.exports = User;
