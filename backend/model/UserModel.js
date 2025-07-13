const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return !/\d/.test(value);
        },
        message: "Full name must not contain any number",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: "Email is not valid",
      },
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return validator.isMobilePhone(value, "ne-NP", { strictMode: false });
        },
        message: "Mobile number is not valid for Nepal",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length >= 8;
        },
        message: "Password must be at least 8 characters long",
      },
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  if (this.password !== this.confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const saltRounds = 10;
  const myPlaintextPassword = this.password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);
  this.password = hashedPassword;
  this.confirmPassword = undefined;

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
