import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all todos
export const getTodos = () => API.get("/todos");

// Create todo
export const createTodo = (title) =>
  API.post("/todos", { title });

// Update todo
export const updateTodo = (id, title) =>
  API.put(`/todos/${id}`, { title });

// Toggle complete
export const toggleTodo = (id) =>
  API.patch(`/todos/${id}/toggle`);

// Delete todo
export const deleteTodo = (id) =>
  API.delete(`/todos/${id}`);
