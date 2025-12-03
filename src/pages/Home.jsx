import { useTodos } from "../context/TodoContext.jsx";
import TodoInput from "../components/TodoInput.jsx";
import TodoItem from "../components/TodoItem.jsx";

export default function Home() {
  const { todos, loading } = useTodos();

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <TodoInput />

      {loading ? (
        <p className="text-center text-gray-600 mt-5">Loading todos...</p>
      ) : todos.length === 0 ? (
        <p className="text-center text-gray-500 mt-5">No todos yet.</p>
      ) : (
        <div className="mt-4">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
