const { Activity } = require("../models");

class ActivityController {
  static async findAll(req, res, next) {
    try {
      const activities = await Activity.findAll({
        attributes: [
          ["activity_id", "id"],
          "title",
          "email",
          "createdAt",
          "updatedAt",
        ],
      });
      res
        .status(200)
        .json({ status: "success", message: "success", data: activities });
    } catch (error) {
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      const { activity_id } = req.params;

      const activity = await Activity.findByPk(activity_id, {
        attributes: [
          ["activity_id", "id"],
          "title",
          "email",
          "createdAt",
          "updatedAt",
        ],
      });

      if (!activity) throw { activity_id, name: "activity_not_found" };

      res
        .status(200)
        .json({ status: "success", message: "success", data: activity });
    } catch (error) {
      next(error);
    }
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
  static async updateActivity(req, res, next) {
    try {
      const { activity_id } = req.params;
      const { title } = req.body;
      if (!title) throw { name: "title_missing" };
      await Activity.update({ title }, { where: { activity_id } });

      const exist = await Activity.findByPk(activity_id, {
        attributes: [
          ["activity_id", "id"],
          "title",
          "email",
          "createdAt",
          "updatedAt",
        ],
      });
      if (!exist) throw { activity_id, name: "activity_not_found" };

      res
        .status(200)
        .json({ status: "Success", message: "success", data: exist });
    } catch (error) {
      next(error);
    }
  }
  static async deleteActivity(req, res, next) {
    try {
      const { activity_id } = req.params;
      const deleted = await Activity.destroy({ where: { activity_id } });
      if (deleted == 0) throw { activity_id, name: "activity_not_found" };
      res.status(200).json({ status: "Success", message: "Success", data: {} });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ActivityController;
