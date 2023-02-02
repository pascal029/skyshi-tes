const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = `Internal Server Error`;
  let status = "Internal Server Error";
  console.log(err);

  if (err.name == "SequelizeValidationError") {
    code = 400;
    message = err.errors[0].message;
    status = "Bad Request";
  }
  res.status(code).json({ status, message });
};

module.exports = errorHandler;
