const router = require("express").Router();
const TodoController = require("../controllers/todoController");

router.get("/", TodoController.findAll);
router.post("/", TodoController.createTodo);
router.get("/:todo_id", TodoController.findOne);
router.patch("/:todo_id", TodoController.updateTodo);
router.delete("/:todo_id", TodoController.deleteTodo);
module.exports = router;
