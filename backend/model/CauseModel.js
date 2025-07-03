const mongoose = require("mongoose");

const causeSchema = new mongoose.Schema(
  {
    causeName: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 50,
      validate: {
        validator: function (value) {
          return !/^[A-Za-z]+( [A-Za-z]+)*$/.test(value);
        },
        message:
          "Cause Name should not contain special characters, numbers except space and comma",
      },
    },
    placeName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 25,
      validate: {
        validator: function (value) {
          return !/^[A-Za-z]+(?:\s*,\s*[A-Za-z]+)*$/.test(value);
        },
        message:
          "Place Name should not contain special characters, numbers except spaces and comma",
      },
    },
    causeDescription: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 200,
      validate: {
        validator: function (value) {
          return !/^[A-Za-z0-9.,!?'"()&%\- ]+$/.test(value);
        },
        message:
          "Invalid characters in Cause Description. Only letters, numbers, spaces, and basic punctuation are allowed.",
      },
    },
    collaborationApplicationDeadline: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Collaboration Application Deadline cannot be a past date.",
      },
    },
    time: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Start Date cannot be a past date.",
      },
    },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "End Date cannot be a past date.",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cause", causeSchema);
