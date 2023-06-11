import React from "react";
import "./assets/sass/App.scss";
import { TodoCounter } from "./components/Counter/TodoCounter";
import { TodoList } from "./components/List/TodoList";
import { TodoSearch } from "./components/Search/TodoSearch";
import { CreateTodoButton } from "./components/Button/CreateTodoButton";
import { TodoItem } from "./components/List/TodoItem";

/*
const defaultTodos = [
  {
    text: "Alimentar a las vacas",
    level: "high",
    completed: true,
  },
  {
    text: "Alimentar a las ovejas",
    level: "high",
    completed: false,
  },
  {
    text: "Alimentar a los cerdos",
    level: "high",
    completed: false,
  },
  {
    text: "Alimentar a los pollos",
    level: "high",
    completed: false,
  },
  {
    text: "Generar roca",
    level: "medium",
    completed: false,
  },
  {
    text: "Desocupar hornos",
    level: "medium",
    completed: false,
  },
  {
    text: "Cocinar roca",
    level: "medium",
    completed: false,
  },
  {
    text: "Recolectar caña de azúcar",
    level: "low",
    completed: false,
  },
  {
    text: "Crear papel",
    level: "low",
    completed: false,
  },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
localStorage.removeItem('TODOS_V1')
*/

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
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

  // set todo to complete
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // delete todo
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
              level={todo.level}
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
