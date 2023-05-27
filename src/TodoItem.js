function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`todo__list-item ${completed ? "completed" : ""}`}>
      <span onClick={onComplete}>V</span>
      <p>{text}</p>
      <span onClick={onDelete}>X</span>
    </li>
  );
}

export { TodoItem };
