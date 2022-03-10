const Todo = require('../models/todoSchema');

const getTodos = async (req, res) => {
  const allTodos = await Todo.find({user: req.params.id});

  if (!allTodos || allTodos.length === 0) {
    res.status(400).send('No todo');
  }

  res.status(200).json(allTodos);
};

const createTodo = async (req, res) => {
  const newTodo = new Todo({
    user: req.params.id,
    ...req.body,
    isCompleted: false,
  });

  const todo = await newTodo.save();

  res.status(200).json(todo);
};

const editTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400).send('Invalid todo ID');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
};

const updateTodoStatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400).send('Invalid todo ID');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    {isCompleted: true},
    {
      new: true,
    }
  );

  res.status(200).json(updatedTodo);
};

const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(401).send('Invalid todo ID');
  }

  await todo.remove();

  res.status(200).json({id: req.params.id});
};

module.exports = {
  getTodos,
  createTodo,
  editTodo,
  updateTodoStatus,
  deleteTodo,
};
