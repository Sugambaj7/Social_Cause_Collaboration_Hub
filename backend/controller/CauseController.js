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
      helpingHands,
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
      helpingHands,
      collaborationApplicationDeadline,
      time,
      startDate,
      endDate,
      userId,
    });

    await newCause.save();

    res
      .status(201)
      .json(
        new ApiResponse.ApiRes(201, newCause, "Cause added successfully", true)
      );

    next();
  });

  getCausesByUserId = asyncWrapper(async (req, res) => {
    const userId = req.params.userId;

    const causes = await Cause.find({ userId: userId });
    if (!causes || causes.length === 0) {
      throw new ApiError.ApiError(404, "No causes found!!!", null, false);
    }
    res
      .status(200)
      .json(
        new ApiResponse.ApiRes(200, causes, "My Causes fetched successfully")
      );
  });

  getCauses = asyncWrapper(async (req, res) => {
    const causes = await Cause.find();
    if (!causes || causes.length === 0) {
      throw new ApiError.ApiError(404, "No causes found!!!", null, false);
    }
    res
      .status(200)
      .json(new ApiResponse.ApiRes(200, causes, "Causes fetched successfully"));
  });

  updateCauseById = asyncWrapper(async (req, res) => {
    const causeId = req.params.causeId;

    const updatedCause = await Cause.findOneAndUpdate(
      {
        _id: causeId,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!updatedCause) {
      throw new ApiError.ApiError(404, "Unable to update cause", null, false);
    }
    res
      .status(200)
      .json(
        new ApiResponse.ApiRes(
          200,
          updatedCause,
          "Cause updated successfully",
          true
        )
      );
  });

  deleteCauseById = asyncWrapper(async (req, res) => {
    const causeId = req.params.causeId;

    const deletedCause = await Cause.findOneAndDelete({ _id: causeId });

    if (!deletedCause) {
      throw new ApiError.ApiError(404, "Unable to delete cause", null, false);
    }

    res
      .status(200)
      .json(
        new ApiResponse.ApiRes(
          200,
          deletedCause,
          "Cause deleted successfully",
          true
        )
      );
  });
}

module.exports = CauseController;
