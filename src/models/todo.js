// This file might not be necessary when using Prisma, as Prisma generates its own models.
// However, you can use it to define additional methods or validations if needed.

const prisma = require('../config/database');

const Todo = {
  findAll: () => prisma.todo.findMany(),
  findById: (id) => prisma.todo.findUnique({ where: { id } }),
  create: (data) => prisma.todo.create({ data }),
  update: (id, data) => prisma.todo.update({ where: { id }, data }),
  delete: (id) => prisma.todo.delete({ where: { id } }),
};

module.exports = Todo;