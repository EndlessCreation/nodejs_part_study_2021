import express from 'express';
import { TodoController } from '../controllers/TodoController.js';
import { AuthHelper } from '../middlewares/AuthHelper.js';
import { TodoValidation } from '../validations/TodoValidation.js';

const router = express.Router();
const todoController = new TodoController();
const todoValidation = new TodoValidation();
const authHelper = new AuthHelper();

router.post('/', authHelper.currentUserChecker, todoValidation.createTodoRequest, todoController.create);
router.get('/', authHelper.currentUserChecker, todoController.findAll);
router.get('/:id', authHelper.currentUserChecker, todoValidation.checkIdRequest, todoController.findById);
router.patch('/:id', authHelper.currentUserChecker, todoValidation.updateTodoRequest, todoController.update);
router.patch('/:id/complete', authHelper.currentUserChecker, todoValidation.updateIsCompletedRequest, todoController.updateisCompleted);
router.delete('/:id', authHelper.currentUserChecker, todoValidation.checkIdRequest, todoController.delete);

export default router;
