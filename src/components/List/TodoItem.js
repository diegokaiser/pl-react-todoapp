import { FaCheck, FaTimes, FaPencilAlt } from "react-icons/fa";
import { MdDelete, MdAccessTimeFilled } from "react-icons/md";
import { IoAlertOutline } from "react-icons/io5";
import { GoKebabVertical } from "react-icons/go";

function TodoItem({ text, level, completed, onComplete, onDelete }) {
  const status = completed;
  const importance = level;
  if (status) {
    return (
      <li className="todo__list-item completed">
        <span>
          <FaCheck />
        </span>
        <p>{text}</p>
        <span></span>
      </li>
    );
  }
  return (
    <li className={`todo__list-item ${importance}`}>
      <span onClick={onComplete}>
        {(() => {
          if (importance === "medium") {
            return <MdAccessTimeFilled />;
          } else if (importance === "high") {
            return <IoAlertOutline />;
          } else {
            return <FaTimes />;
          }
        })()}
      </span>
      <p>{text}</p>
      <span>
        <GoKebabVertical />
        <div className="item">
          <div className="item__menu">
            <div className="item__menu-action">
              Editar <FaPencilAlt />
            </div>
            <div className="item__menu-action">
              Eliminar <MdDelete onClick={onDelete} />
            </div>
          </div>
        </div>
      </span>
    </li>
  );
}

export { TodoItem };
