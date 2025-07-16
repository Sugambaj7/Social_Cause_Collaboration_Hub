const Cause = require("../model/CauseModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const ApiResponse = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");

class CauseController {
  addCause = asyncWrapper(async (req, res, next) => {
    const {
      causeName,
      placeName,
      causeDescription,
      collaborationApplicationDeadline,
      time,
      startDate,
      endDate,
      userId,
    } = req.body;
    console.log(req.body, "info");

    const newCause = new Cause({
      causeName,
      placeName,
      causeDescription,
      collaborationApplicationDeadline,
      time,
      startDate,
      endDate,
      userId,
    });

    await newCause.save();
    res
      .status(201)
      .json(new ApiResponse.ApiRes(201, newCause, "Cause added successfully"));
  });
  async getCauses(req, res) {
    try {
      const causes = await Cause.find();
      if (!causes || causes.length === 0) {
        return res.status(404).json({
          message: "No causes found!!!",
        });
      }
      res
        .status(200)
        .json(
          new ApiResponse.ApiRes(200, causes, "Causes fetched successfully")
        );
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
}

module.exports = CauseController;
