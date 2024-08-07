const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { validateTodo } = require('../middlewares/validateRequest');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.post('/', validateTodo, todoController.createTodo);
router.put('/:id', validateTodo, todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;