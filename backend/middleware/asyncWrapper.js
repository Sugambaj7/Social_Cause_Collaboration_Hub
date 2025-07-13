 const asyncWrapper = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something wet wrong",
      });
    }
  };
};

module.exports = asyncWrapper;