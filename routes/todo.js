import express from 'express';
import Todo from '../controllers/todo.js';

const router = express.Router();

router.get('/', Todo.getAll);

router.post('/', Todo.make);

router.get('/:id', Todo.get);

router.delete('/:id', Todo.remove);

router.put('/:id', Todo.edit);

export default router;