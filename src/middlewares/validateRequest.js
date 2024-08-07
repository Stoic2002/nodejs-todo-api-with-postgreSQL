const validateTodo = (req, res, next) => {
    const { title } = req.body;
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({ message: 'Title is required and must be a non-empty string' });
    }
    next();
  };
  
  module.exports = { validateTodo };