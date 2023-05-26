function CreateTodoButton() {
  return (
    <div className="todo__actions">
      <button onClick={(event) => console.log("###event", event.target)}>
        Crear TODO +
      </button>
    </div>
  );
}

export { CreateTodoButton };
