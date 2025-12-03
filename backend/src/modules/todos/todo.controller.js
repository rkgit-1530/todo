// src/modules/todos/todo.controller.js
const {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleTodoStatus,
  deleteTodo,
} = require('./todo.service');

const { successResponse, errorResponse } = require('../../utils/apiResponse');

// GET /api/todos
const getTodosController = async (req, res, next) => {
  try {
    const todos = await getAllTodos();
    return res.json(successResponse('Todos fetched successfully', todos));
  } catch (error) {
    next(error);
  }
};

// POST /api/todos
const createTodoController = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === '') {
      return res
        .status(400)
        .json(errorResponse('Title is required'));
    }

    const todo = await createTodo({ title });
    return res
      .status(201)
      .json(successResponse('Todo created successfully', todo));
  } catch (error) {
    next(error);
  }
};

// PUT /api/todos/:id
const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title || title.trim() === '') {
      return res
        .status(400)
        .json(errorResponse('Title is required'));
    }

    const updated = await updateTodo(id, { title });
    if (!updated) {
      return res.status(404).json(errorResponse('Todo not found'));
    }

    return res.json(successResponse('Todo updated successfully', updated));
  } catch (error) {
    next(error);
  }
};

// PATCH /api/todos/:id/toggle
const toggleTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await toggleTodoStatus(id);
    if (!updated) {
      return res.status(404).json(errorResponse('Todo not found'));
    }

    return res.json(
      successResponse('Todo status toggled successfully', updated)
    );
  } catch (error) {
    next(error);
  }
};

// DELETE /api/todos/:id
const deleteTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await deleteTodo(id);
    if (!deleted) {
      return res.status(404).json(errorResponse('Todo not found'));
    }

    return res.json(successResponse('Todo deleted successfully'));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTodosController,
  createTodoController,
  updateTodoController,
  toggleTodoController,
  deleteTodoController,
};
