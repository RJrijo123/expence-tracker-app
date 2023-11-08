const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//create schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      required: [true, "First name is required"],
      type: String,
    },
    lastname: {
      required: [true, "Last name is required"],
      type: String,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Hei buddy Password is required"],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { 
    timestamps: true,
  }
);

//Hash password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
  next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Compile schema into model
const User = mongoose.model("User", userSchema);

module.exports = User;