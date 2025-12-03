import { createContext, useContext, useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "../api/todoApi";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all todos initially
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await getTodos();
      setTodos(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching todos:", err);
      setLoading(false);
    }
  };

  // Add new todo
  const addTodo = async (title) => {
    if (!title.trim()) return;

    try {
      const res = await createTodo(title);
      setTodos([res.data.data, ...todos]);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Update todo title
  const editTodo = async (id, title) => {
    try {
      const res = await updateTodo(id, title);
      setTodos(
        todos.map((t) => (t._id === id ? res.data.data : t))
      );
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // Toggle complete
  const toggleTodoStatus = async (id) => {
    try {
      const res = await toggleTodo(id);
      setTodos(
        todos.map((t) => (t._id === id ? res.data.data : t))
      );
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  // Delete
  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        addTodo,
        editTodo,
        toggleTodoStatus,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
