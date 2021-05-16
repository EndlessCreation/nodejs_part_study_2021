import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TodoController {
    async findAll(req, res, next) {
        try {
          const todoList = await prisma.todo_list.findMany();
    
          res.send(todoList);
        } catch (err) {
          console.error(err);
          next(err);
        }
      }
    
      async findById(req, res, next) {
        try {
          const todo = await prisma.todo_list.findUnique({
            where: { id: Number(req.params.id) },
          });
    
          res.send(todo);
        } catch (err) {
          console.error(err);
          next(err);
        }
      }
      async create(req, res, next) {
        const { title, description } = req.body;
        console.log(title, description);
        try {
          const todo = await prisma.todo_list.create({
            data: { title, description },
          });
    
          res.send(todo);
        } catch (err) {
          console.error(err);
          next(err);
        }
      }
      async update(req, res, next) {
        const { title, description } = req.body;
        try {
          const todo = await prisma.todo_list.update({
            where: { id: Number(req.params.id) },
            data: { title, description },
          });
    
          res.send(todo);
        } catch (err) {
          console.error(err);
          next(err);
        }
      }
      async delete(req, res, next) {
        try {
          const todo = await prisma.todo_list.delete({
            where: { id: Number(req.params.id) },
          });
    
          res.send(todo);
        } catch (err) {
          console.error(err);
          next(err);
        }
      }
}