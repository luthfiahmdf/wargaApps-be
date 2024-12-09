const errorHandlers = (error, req, res, next) => {
  if (!error) return next();
  res.status(400).json({
    status: "fail",
    message: error.message || error,
  });
};

module.exports = errorHandlers;
