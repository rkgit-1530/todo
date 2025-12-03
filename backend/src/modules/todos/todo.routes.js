// src/modules/todos/todo.routes.js
const express = require('express');
const {
  getTodosController,
  createTodoController,
  updateTodoController,
  toggleTodoController,
  deleteTodoController,
} = require('./todo.controller');

const router = express.Router();

// /api/todos
router.get('/', getTodosController);
router.post('/', createTodoController);

// /api/todos/:id
router.put('/:id', updateTodoController);
router.patch('/:id/toggle', toggleTodoController);
router.delete('/:id', deleteTodoController);

module.exports = router;
