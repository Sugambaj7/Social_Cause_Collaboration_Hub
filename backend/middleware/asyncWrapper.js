const { ApiRes } = require("../utils/ApiResponse");

 const asyncWrapper = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      console.log(err,"k xa error ma");
      res.status(err.statusCode).json( new ApiRes(err.statusCode, err.data, err.message));
    }
  };
};

module.exports = asyncWrapper;