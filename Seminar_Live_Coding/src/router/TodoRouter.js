import express from 'express';
import { TodoController } from '../controllers/TodoController';

const router = express.Router();
const todoController = new TodoController();

router.post('/', todoController.create); // 추가
router.get('/', todoController.findAll); // 전체 조회
router.get('/:id', todoController.findById); // id 조회
router.delete('/:id', todoController.delete); // 삭제
router.patch('/:id', todoController.update); // 수정

export default router;