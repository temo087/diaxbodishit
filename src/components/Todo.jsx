import  { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoname, setTodoname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      name: todoname
    };
    setTodos([newTodo, ...todos])
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTodoname(e.target.value);
          }}
        />
      </form>
      {todos.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
        </div>
      ))}
    </div>
  );
}