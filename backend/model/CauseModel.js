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
          return /^[A-Za-z, ]+$/.test(value);
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
          return /^[A-Za-z]+(?:\s*,\s*[A-Za-z]+)*$/.test(value);
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
          return /^[A-Za-z0-9.,!?'"()&%\- ]+$/.test(value);
        },
        message:
          "Invalid characters in Cause Description. Only letters, numbers, spaces, and basic punctuation are allowed.",
      },
    },
    collaborationApplicationDeadline: {
  type: String,
  required: true,
  match: [/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"],
  validate: {
    validator: function (value) {
      // Get today's date in YYYY-MM-DD
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const todayStr = `${yyyy}-${mm}-${dd}`;
      return value >= todayStr;
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cause", causeSchema);
