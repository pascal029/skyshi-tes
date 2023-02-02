const { Todo } = require("../models");

class TodoController {
  static async findAll(req, res, next) {
    try {
      const { activity_group_id } = req.query;
      let option = {
        where: {},
        attributes: [
          ["todo_id", "id"],
          "activity_group_id",
          "title",
          "is_active",
          "priority",
          "createdAt",
          "updatedAt",
        ],
      };

      if (activity_group_id) {
        option.where = { activity_group_id };
      }
      const data = await Todo.findAll(option);
      res.status(200).json({ status: "Success", message: "Success", data });
    } catch (error) {
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      const { todo_id } = req.params;

      const data = await Todo.findByPk(todo_id, {
        attributes: [
          ["todo_id", "id"],
          "activity_group_id",
          "title",
          "is_active",
          "priority",
          "createdAt",
          "updatedAt",
        ],
      });
      if (!data) throw { todo_id, name: "todo_not_found" };
      res.status(200).json({ status: "Success", message: "Success", data });
    } catch (error) {
      next(error);
    }
  }
  static async createTodo(req, res, next) {
    try {
      const { title, activity_group_id, is_active } = req.body;

      const created = await Todo.create({
        title,
        activity_group_id,
        is_active,
      });

      const data = await Todo.findByPk(created.todo_id, {
        attributes: [
          ["todo_id", "id"],
          "activity_group_id",
          "title",
          "is_active",
          "priority",
          "createdAt",
          "updatedAt",
        ],
      });

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async updateTodo(req, res, next) {
    try {
      const { todo_id } = req.params;
      const { title } = req.body;

      if (!title) throw { name: "title_missing" };

      await Todo.update({ title }, { where: { todo_id } });

      const exist = await Todo.findByPk(todo_id, {
        attributes: [
          ["todo_id", "id"],
          "activity_group_id",
          "title",
          "is_active",
          "priority",
          "createdAt",
          "updatedAt",
        ],
      });
      if (!exist) throw { todo_id, name: "todo_not_found" };

      res
        .status(200)
        .json({ status: "Success", message: "Success", data: exist });
    } catch (error) {
      next(error);
    }
  }
  static async deleteTodo(req, res, next) {
    try {
      const { todo_id } = req.params;
      const deleted = await Todo.destroy({ where: { todo_id } });
      if (deleted == 0) throw { todo_id, name: "todo_not_found" };
      res.status(200).json({ status: "Success", message: "Success", data: {} });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TodoController;
