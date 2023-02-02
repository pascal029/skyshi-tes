const { Activity } = require("../models");

class ActivityController {
  static async findAll(req, res) {
    //
  }
  static async findOne(req, res) {
    //
  }
  static async createActivity(req, res, next) {
    try {
      const { title, email } = req.body;

      const created = await Activity.create({ title, email });
      const data = await Activity.findOne({
        where: { activity_id: created.activity_id },
        attributes: [
          ["activity_id", "id"],
          "title",
          "email",
          "createdAt",
          "updatedAt",
        ],
      });

      res.status(200).json({ status: "success", message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  static async updateActivity(req, res) {
    //
  }
  static async deleteActivity(req, res) {
    //
  }
}

module.exports = ActivityController;
