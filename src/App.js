import React from "react";
import "./assets/sass/App.scss";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  {
    text: "Alimentar a las vacas",
    completed: false,
  },
  {
    text: "Alimentar a las ovejas",
    completed: false,
  },
  {
    text: "Alimentar a los cerdos",
    completed: false,
  },
  {
    text: "Alimentar a los pollos",
    completed: false,
  },
  {
    text: "Generar roca",
    completed: false,
  },
  {
    text: "Desocupar hornos",
    completed: false,
  },
  {
    text: "Cocinar roca",
    completed: false,
  },
  {
    text: "Recolectar caña de azúcar",
    completed: false,
  },
  {
    text: "Crear papel",
    completed: false,
  },
];

function App() {
  return (
    <div className="container">
      <div className="todo">
        <TodoCounter completed={3} total={7} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
