const express = require('express');
const {
  getTodos,
  createTodo,
  editTodo,
  updateTodoStatus,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

router.get('/:userId', getTodos);

router.post('/create/:id', createTodo);

router.put('/:id', editTodo);

router.put('/complete/:id', updateTodoStatus);

router.delete('/:id', deleteTodo);

module.exports = router;
