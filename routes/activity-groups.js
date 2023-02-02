const router = require("express").Router();
const ActivityController = require("../controllers/activityController");

router.get("/", ActivityController.findAll);
router.post("/", ActivityController.createActivity);
router.get("/:id", ActivityController.findOne);
router.patch("/:id", ActivityController.updateActivity);
router.delete("/:id", ActivityController.updateActivity);

module.exports = router;
