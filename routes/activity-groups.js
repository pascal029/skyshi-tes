const router = require("express").Router();
const ActivityController = require("../controllers/activityController");

router.get("/", ActivityController.findAll);
router.post("/", ActivityController.createActivity);
router.get("/:activity_id", ActivityController.findOne);
router.patch("/:activity_id", ActivityController.updateActivity);
router.delete("/:activity_id", ActivityController.deleteActivity);

module.exports = router;
