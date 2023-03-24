const error = (err, req, res, next) => {
  console.log(err);
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Buruu butetstei ID baina";
  }

  res.status(400).json({ message: "next(err)" });
};

module.exports = error;
