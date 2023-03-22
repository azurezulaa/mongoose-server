const error = (err, req, res, next) => {
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Buruu butetstei ID baina";
  }
  res.status(err.statusCode || 500).json({ message: err.message });
};

module.exports = error;
