const prisma = require('../config/database');

exports.getAllTodos = () => {
  return prisma.todo.findMany();
};

exports.getTodo = (id) => {
  return prisma.todo.findUnique({ where: { id } });
};

exports.createTodo = (data) => {
  return prisma.todo.create({ data });
};

exports.updateTodo = (id, data) => {
  return prisma.todo.update({ where: { id }, data });
};

exports.deleteTodo = (id) => {
  return prisma.todo.delete({ where: { id } });
};