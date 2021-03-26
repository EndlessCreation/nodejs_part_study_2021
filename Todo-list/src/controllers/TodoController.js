import db from '../models/index.js';

export class TodoController {
  async findAll(req, res, next) {
    try {
      const todoList = await db.Todo.findAll({ where: { writer: req.user.id }, order: [['createdAt', 'ASC']] });

      res.send(todoList);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  async findById(req, res, next) {
    try {
      const todo = await db.Todo.findOne({ where: { id: req.params.id, writer: req.user.id } });

      res.send(todo);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  async create(req, res, next) {
    const { title, description } = req.body;
    try {
      const todo = await db.Todo.create({ title, description, writer: req.user.id });

      res.status(201).send(todo);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  async update(req, res, next) {
    const { title, description } = req.body;
    try {
      const isUpdated = await db.Todo.update(
        {
          title,
          description,
        },
        {
          where: {
            id: req.params.id,
            writer: req.user.id,
          },
        }
      );
      if (isUpdated) {
        const todo = await db.Todo.findOne({ where: { id: req.params.id, writer: req.user.id } });
        res.send(todo);
      } else {
        res.json({ isDeleted: false });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
  async updateisCompleted(req, res, next) {
    const { isCompleted } = req.body;
    try {
      const isUpdated = await db.Todo.update(
        {
          isCompleted,
        },
        {
          where: {
            id: req.params.id,
            writer: req.user.id,
          },
        }
      );
      if (isUpdated) {
        const todo = await db.Todo.findOne({ where: { id: req.params.id, writer: req.user.id } });
        res.send(todo);
      } else {
        res.json({ isDeleted: false });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
  async delete(req, res, next) {
    try {
      const isDeleted = await db.Todo.destroy({ where: { id: req.params.id, writer: req.user.id } });
      if (isDeleted) {
        res.json({ isDeleted: true });
      } else {
        res.json({ isDeleted: false });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
