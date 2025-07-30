const { ApiRes } = require("../utils/ApiResponse");
const { ApiError } = require("../utils/ApiError");

const globalErrorHandler = (error, req, res, next) => {
  if (!(error instanceof ApiError)) {
    res
      .status(500)
      .json(
        new ApiRes(
          500,
          null,
          error._message ?? error.message ?? "Internal Server Error",
          false
        )
      );
  } else {
    res
      .status(error.statusCode)
      .json(new ApiRes(error.statusCode, error.data, error.message, false));
  }
};

module.exports = globalErrorHandler;
