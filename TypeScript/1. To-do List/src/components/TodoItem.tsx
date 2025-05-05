import { useTodoDispatch } from "../App";
import { Todo } from "../types";
import "./TodoItem.css";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div className="todo-item">
      {props.id}. {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
