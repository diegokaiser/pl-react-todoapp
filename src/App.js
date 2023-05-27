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
    completed: true,
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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodo = todos.filter((todo) => {
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    const todoTextToLowerCase = noTildes(todo.text.toLowerCase());
    const searchValueToLowerCase = noTildes(searchValue.toLowerCase());
    return todoTextToLowerCase.includes(searchValueToLowerCase);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <div className="todo">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodo.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
