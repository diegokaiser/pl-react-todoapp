function TodoCounter({ completed, total }) {
  return (
    <div className="todo__counter">
      Has completado <b>{completed}</b> de <b>{total}</b> TODOs
    </div>
  );
}

export { TodoCounter };
