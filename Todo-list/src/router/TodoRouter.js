import express from 'express';
import { TodoController } from '../controllers/TodoController.js';
import { TodoValidation } from '../validations/TodoValidation.js';
const router = express.Router();

const todoController = new TodoController();
const todoValidation = new TodoValidation();

router.post('/', todoValidation.createTodoRequest, todoController.create);
router.get('/', todoController.findAll);
router.get('/:id', todoValidation.checkIdRequest, todoController.findById);
router.patch('/:id', todoValidation.updateTodoRequest, todoController.update);
router.patch('/:id/complete', todoValidation.checkIdRequest, todoController.updateisCompleted);
router.delete('/:id', todoValidation.checkIdRequest, todoController.delete);

export default router;
