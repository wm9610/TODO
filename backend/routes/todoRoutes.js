const express = require('express');
const {
  getTodos,
  createTodo,
  editTodo,
  updateTodoStatus,
  deleteTodo,
} = require('../controllers/todoController');

const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:userId', verifyToken, getTodos);

router.post('/create/:id', verifyToken, createTodo);

router.put('/:id', verifyToken, editTodo);

router.put('/complete/:id', verifyToken, updateTodoStatus);

router.delete('/:id', verifyToken, deleteTodo);

module.exports = router;
