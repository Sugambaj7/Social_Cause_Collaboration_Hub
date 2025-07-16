 const asyncWrapper = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      console.log(err,"k xa error ma");
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  };
};

module.exports = asyncWrapper;