import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, onHandleDeleteTodo , checked ,onHandleCheckedTodo}) => {
  return (
    // key={index}= key={key}
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span> {/* curelem = data */}
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      {/* onHandleDeleteTodo(curelem) = handleDeleteTodo(data) */}
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
