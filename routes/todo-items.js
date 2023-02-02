const router = require("express").Router();
const TodoController = require("../controllers/todoController");

router.get("/", TodoController.findAll);
router.post("/", TodoController.createTodo);
router.get("/:id", TodoController.findOne);
router.patch("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);
module.exports = router;
