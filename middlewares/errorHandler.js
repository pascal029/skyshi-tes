const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = `Internal Server Error`;
  let status = "Internal Server Error";

  if (err.name == "SequelizeValidationError") {
    code = 400;
    message = err.errors[0].message;
    status = "Bad Request";
  } else if (err.name == "activity_not_found") {
    code = 400;
    message = `Activity with ID ${err.activity_id} Not Found`;
    status = "Bad Request";
  } else if (err.name == "title_missing") {
    code = 400;
    message = `title cannot be null`;
    status = "Bad Request";
  } else if (err.name == "todo_not_found") {
    code = 400;
    message = `Todo with ID ${err.todo_id} Not Found`;
    status = "Bad Request";
  }
  res.status(code).json({ status, message });
};

module.exports = errorHandler;
