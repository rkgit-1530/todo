// src/modules/todos/todo.service.js
const Todo = require('./todo.model');

const getAllTodos = async () => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  return todos;
};

const createTodo = async (payload) => {
  const todo = await Todo.create({
    title: payload.title,
  });
  return todo;
};

const updateTodo = async (id, payload) => {
  const todo = await Todo.findByIdAndUpdate(
    id,
    { title: payload.title },
    { new: true }
  );
  return todo;
};

const toggleTodoStatus = async (id) => {
  const todo = await Todo.findById(id);
  if (!todo) return null;

  todo.isCompleted = !todo.isCompleted;
  await todo.save();
  return todo;
};

const deleteTodo = async (id) => {
  const result = await Todo.findByIdAndDelete(id);
  return result;
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleTodoStatus,
  deleteTodo,
};
