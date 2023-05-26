function TodoItem({ text, completed }) {
  return (
    <li className={`todo__list-item ${completed ? "completed" : ""}`}>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
