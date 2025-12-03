import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo(title);
    setTitle(""); // clear input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mt-6 mb-4 justify-center"
    >
      <input
        type="text"
        placeholder="Enter todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-72 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow"
      >
        Add
      </button>
    </form>
  );
}
