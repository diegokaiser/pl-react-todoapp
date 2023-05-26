import { TodoItem } from "./TodoItem";

function TodoList({ children }) {
  return <ul className="todo__list">{children}</ul>;
}

export { TodoList };
