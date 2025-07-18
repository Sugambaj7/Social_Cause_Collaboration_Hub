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

    next();

  });


 getCauses = asyncWrapper( async (req, res) => {
      const causes = await Cause.find();
      if (!causes || causes.length === 0) {
        throw new ApiError.ApiError(404, "No causes found!!!", null, false);
      }
      res
        .status(200)
        .json(
          new ApiResponse.ApiRes(200, causes, "Causes fetched successfully")
        );
  });
}

module.exports = CauseController;
