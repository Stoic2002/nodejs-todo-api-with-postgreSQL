const todoService = require('../services/todoService');

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await todoService.getTodo(parseInt(req.params.id));
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await todoService.updateTodo(parseInt(req.params.id), req.body);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    await todoService.deleteTodo(parseInt(req.params.id));
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};