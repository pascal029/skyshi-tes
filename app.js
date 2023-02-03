require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const activity_groups = require("./routes/activity-groups");
const todo_items = require("./routes/todo-items");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todo-items", todo_items);
app.use("/activity-groups", activity_groups);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
