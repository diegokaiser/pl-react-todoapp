import { HiPlus } from "react-icons/hi";

function CreateTodoButton() {
  return (
    <div className="todo__actions">
      <button onClick={(event) => console.log("###event", event.target)}>
        Crear TODO <HiPlus />
      </button>
    </div>
  );
}

export { CreateTodoButton };
