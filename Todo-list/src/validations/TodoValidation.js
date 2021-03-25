import validator from 'express-validator';
const { check, validationResult } = validator;

export class TodoValidation {
  async createTodoRequest(req, res, next) {
    try {
      await check('title').bail().isString().run(req);
      await check('description').bail().isString().run(req);
      await check('writer').bail().isString().run(req);
      const error = validationResult(req);
      if (!error.isEmpty()) {
        error.throw();
      }
      next();
    } catch (err) {
      res.status(400);
      res.send(err.mapped());
    }
  }

  async updateTodoRequest(req, res, next) {
    try {
      await check('id').bail().isNumeric().run(req);
      await check('title').bail().isString().run(req);
      await check('description').bail().isString().run(req);
      const error = validationResult(req);
      if (!error.isEmpty()) {
        error.throw();
      }
      next();
    } catch (err) {
      res.status(400);
      res.send(err.mapped());
    }
  }

  async checkIdRequest(req, res, next) {
    try {
      await check('id').bail().isNumeric().run(req);
      const error = validationResult(req);
      if (!error.isEmpty()) {
        error.throw();
      }
      next();
    } catch (err) {
      res.status(400);
      res.send(err.mapped());
    }
  }
}
