import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { editTodo, toggleTodoStatus, removeTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const saveEdit = () => {
    if (!editTitle.trim()) return;
    editTodo(todo._id, editTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow mb-3 border">
      <div className="flex items-center gap-3">
        {/* Toggle Complete */}
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodoStatus(todo._id)}
          className="w-5 h-5"
        />

        {/* Title or Edit field */}
        {isEditing ? (
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        ) : (
          <span
            className={`text-lg ${
              todo.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => removeTodo(todo._id)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
